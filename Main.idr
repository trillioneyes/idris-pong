module Main

%include javascript "pong_helper.js"

syntax inlineJS [code] = mkForeign (FFun code [] FUnit)
syntax jsVar [name] [type] = mkForeign (FFun name [] type)

record Paddle : Type where
  MkP : (pCenter : Float) -> (pHeight : Float) -> Paddle

record Ball : Type where
  MkB : (bCenter : (Float, Float)) -> (bRad : Float) -> (velocity : (Float, Float)) -> Ball

record PongState : Type where
  MkSt : (ball : Ball) -> (fieldSize : (Float, Float)) -> (left : Paddle) -> (right : Paddle)
       -> PongState

record PongParams : Type where
  MkPms : (aiSpeed : Float) -> (twistFactor : Float) -> 
          (paddleHeight : Float) -> (paddleWidth : Float) ->
          (accelFactor : Float) -> (vx0Factor : Float) -> (vy0Factor : Float) ->
          PongParams

defaultParams : PongParams
defaultParams = MkPms 2 1 50 4 1.05 3 1.2

data Phase = Playing | ShowScore | Waiting | Menu
data Game : Phase -> Type where
  Play : PongParams -> PongState -> (Int, Int) -> Game Playing
  Report : PongParams -> (Int, Int) -> (duration : Int) -> Game ShowScore
  Wait : PongParams -> PongState -> (Int, Int) -> (duration : Int) -> Game Waiting
  Choose : Game Menu

-- Functions for manipulating the game state
record InputState : Type where
  MkI : (mouseY : Float) -> (escape : Bool) -> InputState

getInputState : IO InputState
getInputState = return (MkI !getMouse !getEscape) where
  getMouse = jsVar "mouseY" FFloat
  getEscape = do
    val <- map (== 1) $ jsVar "escape" FInt
    mkForeign (FFun "escape = %0" [FInt] FUnit) 0
    return val

boundVelocity : Float -> (Float, Float) -> Float -> Float
boundVelocity x (lower, upper) = case (x <= upper, x >= lower) of
  (True, True) => id
  (True, False) => abs
  (False, True) => negate . abs
  (False, False) => believe_me "impossible"

collides : PongParams -> Ball -> Paddle -> Paddle -> Float -> Ball
collides pms b (MkP pyl phl) (MkP pyr phr) pxr' = record { bCenter = newP, velocity = newV } b where
  x : Float
  x = fst (bCenter b)
  y : Float
  y = snd (bCenter b)
  pw : Float
  pw = paddleWidth pms
  pxl : Float
  pxl = 0
  pxr : Float
  pxr = pxr' - pw
  left : Bool
  left = y <= pyl + phl/2 && y >= pyl - phl/2 && x - bRad b <= pxl + pw && x + bRad b >= pxl
  right : Bool
  right = y <= pyr + phr/2 && y >= pyr - phr/2 && x - bRad b <= pxr + pw && x + bRad b >= pxr
  newX : Float
  newX = if left then pxl + pw + bRad b
                 else (if right then pxr - bRad b else x)
  newVX : Float
  newVX = if left then abs (fst (velocity b))
                  else (if right then - abs (fst (velocity b)) else fst (velocity b))
  factor : Float
  factor = if left || right then accelFactor pms else 1
  newP = (newX, y)
  vy : Float
  vy = snd (velocity b)
  dvy : Float
  dvy = if left then twistFactor pms * (y - pyl) / phl
                else (if right then twistFactor pms * (y - pyr) / phr else 0)
  newV = (newVX * factor, vy * factor + dvy)

data Outcome = HumanWins | AIWins | Quit

aiTrack : PongParams -> Paddle -> Float -> Ball -> Paddle
aiTrack pms rightPaddle w (MkB (x, y) r (vx, vy)) = 
  if x > 3*w/4 
    then record {pCenter = pCenter rightPaddle + pvy} rightPaddle
    else record {pCenter = pCenter rightPaddle + pvy*abs pvy/(speed*speed)} rightPaddle
 where boundMagnitude : Float -> Float -> Float
       boundMagnitude mag val = min mag (max (-mag) (mag * val))
       speed : Float
       speed = aiSpeed pms
       pvy = boundMagnitude speed ((y - pCenter rightPaddle) / pHeight rightPaddle)

step : PongParams -> Float -> InputState -> PongState -> Either Outcome PongState
step pms deltaT (MkI mouseY esc) (MkSt (MkB (x, y) r (vx, vy)) (w, h) leftPaddle rightPaddle) =
   if esc then Left Quit else Right (MkSt !newBall (w, h) newLeft !newRight)
     where newVY : Float
           newVY = boundVelocity y (0, h) vy
           newVX : Float
           newVX = boundVelocity x (0, w) vx
           newLeft = record { pCenter = mouseY } leftPaddle
           movedBall : Ball
           movedBall = (MkB (x + vx*deltaT, y + vy*deltaT) r (newVX, newVY))
           newBall = if x < 0 || x > w 
                        then (if x < 0 then Left AIWins else Left HumanWins)
                        else Right (collides pms movedBall leftPaddle rightPaddle w)
           newRight = Right (aiTrack pms rightPaddle w !newBall)

-- functions for manipulating the canvas
setFillStyle : String -> IO ()
setFillStyle color = mkForeign (FFun "setFillStyle(%0)" [FString] FUnit) color
clear : String -> IO ()
clear color = do
  setFillStyle color
  inlineJS "context.fillRect(0, 0, canvas.width, canvas.height)"

circle : (Float, Float) -> Float -> IO ()
circle (x, y) rad = do
  inlineJS "context.beginPath()"
  mkForeign (FFun "context.arc(%0, %1, %2, 0, 2*Math.PI, false)" [FFloat, FFloat, FFloat] FUnit) x y rad
  inlineJS "context.fill()"

rect : (Float, Float) -> (Float, Float) -> IO ()
rect (x, y) (w, h) = do
  mkForeign (FFun "context.fillRect(%0, %1, %2, %3)" [FFloat, FFloat, FFloat, FFloat] FUnit) x y w h

draw : PongParams -> PongState -> IO ()
draw pms (MkSt (MkB p r v) (w,h) (MkP ly lh) (MkP ry rh)) = do
  clear "#000000"
  setFillStyle "#FFFFFF"
  height <- jsVar "canvas.height" FInt
  let pw = paddleWidth pms
  rect (0, ly - lh/2) (pw, lh)
  rect (w-pw, ry - rh/2) (pw, rh)
  circle p 5

newGame : PongParams -> IO PongState
newGame pms = do
  width <- jsVar "canvas.width" FFloat
  height <- jsVar "canvas.height" FFloat
  angle <- mkForeign (FFun "Math.random() * 2 * Math.PI" [] FFloat)
  vx <- mkForeign (FFun "Math.sin(%0)" [FFloat] FFloat) angle
  vy <- mkForeign (FFun "Math.cos(%0)" [FFloat] FFloat) angle
  let ball = MkB (width/2, height/2) 4 (vx*vx0Factor pms, vy*vy0Factor pms)
  let paddle = MkP (height/2) (paddleHeight pms)
  return (MkSt ball (width, height) paddle paddle)

setFont : String -> IO ()
setFont spec = mkForeign (FFun "context.font = %0" [FString] FUnit) spec

fillText : String -> (Int, Int) -> IO ()
fillText s (x, y) = mkForeign (FFun "context.fillText(%0, %1, %2)" [FString, FInt, FInt] FUnit)
                              s x y

drawReport : (Int, Int) -> IO ()
drawReport (h, ai) = do
    clear "#000000"
    setFillStyle "#FFFFFF"
    setFont "120px Courier"
    fillText (show h) (50, 100)
    fillText (show ai) (260, 100)

setTimeout : (() -> IO a) -> Float -> IO ()
setTimeout {a} f millis =
    mkForeign (FFun "setTimeout(%0, %1)" [FFunction FUnit (FAny (IO a)), FFloat] FUnit) f millis

setClick : (() -> IO b) -> IO ()
setClick f {b} =
  mkForeign (FFun "canvas.onclick = %0" [FFunction FUnit (FAny (IO b))] FUnit) f

readParam : String -> IO (Maybe Float)
readParam name = do
    val <- mkForeign (FFun "document.params[%0].value" [FString] FString) name
    return (readNumber val)
  where validFloatString : Bool -> List Char -> Bool
        validFloatString False ('.'::xs) = validFloatString True xs
        validFloatString True ('.'::xs) = False
        validFloatString seenDot ('-'::xs) = not ('-' `elem` xs) && validFloatString seenDot xs
        validFloatString seenDot (c::xs) = isDigit c && validFloatString seenDot xs
        validFloatString _ [] = True
        readNumber : String -> Maybe Float
        readNumber s = if validFloatString False (unpack s) then Just $ cast s else Nothing


getParams : IO (Maybe PongParams)
getParams = do
  speed <- readParam "aiSpeed"
  twist <- readParam "twistFactor"
  height <- readParam "paddleHeight"
  width <- readParam "paddleWidth"
  accel <- readParam "accelFactor"
  vx0 <- readParam "vx0Factor"
  vy0 <- readParam "vy0Factor"
  return $ [| MkPms speed twist height width accel vx0 vy0 |]

showMenu : IO ()
showMenu = do
  clear "black"
  setFont "120px Lucida Console"
  setFillStyle "white"
  fillText "PONG" (5, 120)
  setFont "12px Lucida Console"
  fillText "Set the parameters and click here to start" (60, 175)

partial
play : PongParams -> PongState -> (Outcome -> IO ()) -> IO ()
play pms p f = do
  clear "#000000"
  draw pms p
  input <- getInputState
  case (step pms 1 input p) of
    Right next => setTimeout (\() => play pms next f) (1000/60)
    Left winner => f winner

partial
run : Game phase -> IO ()
run (Play pms st (h, ai)) = play pms st report where
  report HumanWins = run (Report pms (h+1, ai) 2)
  report AIWins = run (Report pms (h, ai+1) 2)
  report Quit = run Choose
run (Report pms score duration) = do
  drawReport score
  st <- newGame pms
  setTimeout (\() => run (Wait pms st score 2)) (cast duration * 1000)
run (Wait pms st score duration) = do
  draw pms st
  setTimeout (\() => run (Play pms st score)) (cast duration * 1000)
run Choose = do
  showMenu
  setClick startGame
 where reallyStart : Maybe PongParams -> IO ()
       reallyStart Nothing = do
         clear "black"
         setFont "12px Lucida Console"
         setFillStyle "white"
         fillText "There was an error in your parameters" (5, 100)
         setTimeout (\_ => run Choose) 3000
       reallyStart (Just pms) = do
         setClick (const (return ()))
         run (Wait pms !(newGame pms) (0, 0) 2) 
       startGame : () -> IO ()
       startGame _ = do
         pms <- getParams
         reallyStart pms

partial
main : IO ()
main = run Choose
