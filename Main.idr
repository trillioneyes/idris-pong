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

data Side : Type

data Phase = Playing | ShowScore | Waiting | Menu | Attract
data Game : Phase -> Type where
  Play : PongParams -> PongState -> (Int, Int) -> Game Playing
  Report : Side -> PongParams -> (Int, Int) -> (duration : Int) -> Game ShowScore
  Wait : PongParams -> PongState -> (Int, Int) -> (duration : Int) -> Game Waiting
  Choose : Game Menu
  Demo : PongParams -> PongState -> (repetitions : Int) -> Game Attract
  DemoWait : (duration : Int) -> (repetitions : Int) -> Game Waiting

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

data Side = Human | AI
aiChasePos : PongParams -> Paddle -> Float -> Side -> Ball -> Float
aiChasePos pms rightPaddle w side (MkB (x, y) r (vx, vy)) = 
  if isn'tLazy side w x
    then pCenter rightPaddle + pvy
    else pCenter rightPaddle + pvy*abs pvy/(speed*speed)
 where boundMagnitude : Float -> Float -> Float
       boundMagnitude mag val = min mag (max (-mag) (mag * val))
       speed : Float
       speed = aiSpeed pms
       pvy = boundMagnitude speed ((y - pCenter rightPaddle) / pHeight rightPaddle)
       isn'tLazy : Side -> Float -> Float -> Bool
       isn'tLazy AI w x = x > 3*w/4
       isn'tLazy Human w x = x < w/4
aiTrack : PongParams -> Paddle -> Float -> Ball -> Paddle
aiTrack pms rightPaddle w b = record { pCenter = aiChasePos pms rightPaddle w AI b } rightPaddle

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

centerText : String -> (pixelSize : Int) -> (family : String) -> 
             (rectTL : (Int, Int)) -> (rectSize : (Int, Int)) ->
             IO ()
centerText str textHeight family (x, y) (w, h) = do
  setFont (show textHeight ++ "px " ++ family)
  textWidth <- measure str
  let dispX = (w - textWidth) `div` 2
  let dispY = (h - textHeight) `div` 2
  fillText str (x + dispX, y + dispY + textHeight)
 where measure : String -> IO Int
       measure str = mkForeign (FFun "context.measureText(%0).width" [FString] FInt) str

drawReport : (Int, Int) -> IO ()
drawReport (h, ai) = do
    clear "#000000"
    setFillStyle "#FFFFFF"
    width <- jsVar "canvas.width" FInt
    height <- jsVar "canvas.height" FInt
    centerText (show h) 120 "Courier" (0, 0) ((width `div` 2) - 10, height)
    centerText (show ai) 120 "Courier" ((width `div` 2) + 10, 0) ((width `div` 2) - 10, height)

setTimeout : (() -> IO a) -> Float -> IO Int
setTimeout {a} f millis =
    mkForeign (FFun "setTimeout(%0, %1)" [FFunction FUnit (FAny (IO a)), FFloat] FInt) f millis

killDemo : IO ()
killDemo = do
  proc <- jsVar "demoProc" FInt
  mkForeign (FFun "clearTimeout(%0)" [FInt] FUnit) proc

demoSetTimeout : (() -> IO a) -> Float -> IO ()
demoSetTimeout f millis = do
  killDemo
  proc <- setTimeout f millis
  mkForeign (FFun "demoProc = %0" [FInt] FUnit) proc

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

normal : IO Float
normal = return (!random + !random + !random / 3) where
  subtract : Float -> Float -> Float
  subtract x y = y - x
  random = map ((subtract 1) . (*2)) $ mkForeign (FFun "Math.random()" [] FFloat)

randomParams : IO PongParams
randomParams = do
  speed <- maybeParam 6 "aiSpeed"
  twist <- maybeParam 1.3 "aiSpeed"
  height <- maybeParam 50 "paddleHeight"
  width <- maybeParam 4 "paddleWidth"
  accel <- maybeParam 1.05 "accelFactor"
  vx0 <- maybeParam 4 "vx0Factor"
  vy0 <- maybeParam 0.6 "vy0Factor"
  return (MkPms (speed + !normal*4) (twist + !normal*2)
                (height + !normal*15) (max 3 . abs $ width + !normal*8)
                (accel + !normal*0.1) (vx0 + !normal*3)
                (vy0 + !normal))
 where maybeParam : Float -> String -> IO Float
       maybeParam def name = map (maybe def id) (readParam name)

instructions : IO ()
instructions = do
  width <- jsVar "canvas.width" FInt
  height <- jsVar "canvas.height" FInt
  centerText "Set the parameters and click here to start." 12 "Lucida Console"
             (0, 3*height`div`4) (width, height`div`4)

showMenu : IO ()
showMenu = do
  clear "black"
  setFillStyle "white"
  width <- jsVar "canvas.width" FInt
  height <- jsVar "canvas.height" FInt
  centerText "PONG" 120 "Lucida Console" (0, 0) (width, height)
  setFillStyle "white"
  instructions

partial
play : PongParams -> PongState -> (Outcome -> IO ()) -> IO ()
play pms p f = do
  killDemo
  clear "#000000"
  draw pms p
  input <- getInputState
  case (step pms 1 input p) of
    Right next => setTimeout (\() => play pms next f) (1000/60) >>= const (return ())
    Left winner => f winner

partial
attractPlay : PongParams -> PongState -> (Outcome -> IO ()) -> IO ()
attractPlay pms p f = do
  clear "#000000"
  draw pms p
  width <- jsVar "canvas.width" FInt
  height <- jsVar "canvas.height" FInt
  setFillStyle "white"
  instructions
  input <- getInputState
  let leftPaddle = left p
  let input' = record { mouseY = aiChasePos pms leftPaddle (cast width) Human (ball p)} input
  case (step pms 1 input' p) of
    Right next => do 
      demoSetTimeout (\() => attractPlay pms next f) (1000/60)
    Left winner => f winner

partial
run : Game phase -> IO ()

startGame : () -> IO ()
startGame _ = do
  killDemo
  pms <- getParams
  reallyStart pms
 where reallyStart : Maybe PongParams -> IO ()
       reallyStart Nothing = do
         clear "black"
         setFont "12px Lucida Console"
         setFillStyle "white"
         fillText "There was an error in your parameters" (5, 100)
         setTimeout (\_ => run Choose) 3000
         return ()
       reallyStart (Just pms) = do
         setClick (const (return ()))
         run (Wait pms !(newGame pms) (0, 0) 2) 

run (Play pms st (h, ai)) = play pms st report where
  report HumanWins = run (Report Human pms (h+1, ai) 2)
  report AIWins = run (Report AI pms (h, ai+1) 2)
  report Quit = run Choose

run (Report winner pms score duration) = do
  drawReport (revert winner score)
  setTimeout (\() => do
    drawReport score
    st <- newGame pms
    setTimeout (\() => run (Wait pms st score 2)) (cast duration * 500)
    return ()) (cast duration * 500)
  return ()
 where revert : Side -> (Int, Int) -> (Int, Int)
       revert Human (h, ai) = (h-1, ai)
       revert AI (h, ai) = (h, ai-1)

run (Wait pms st score duration) = do
  draw pms st
  setTimeout (\() => run (Play pms st score)) (cast duration * 1000)
  return ()

run Choose = do
  demoSetTimeout (\() => run (DemoWait 2 3)) 10000
  showMenu
  setClick startGame

run (Demo pms st reps) = do 
    attractPlay pms st next 
  where next Quit = run Choose
        next _ = if reps == 0 then run Choose else run (DemoWait 2 (reps-1))

run (DemoWait duration reps) = do
    pms <- randomParams
    st <- newGame pms
    draw pms st
    instructions
    demoSetTimeout (\() => run (Demo pms st reps)) (cast duration*1000)

partial
main : IO ()
main = run Choose
