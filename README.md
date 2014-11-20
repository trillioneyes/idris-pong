idris-pong
==========

A browser Pong game, taking advantage of Idris's ability to compile to javascript.

## Compiling
* Install Idris. Either visit http://idris-lang.org for instructions or, if you already have a Haskell environment, use `cabal install idris`.
* Run `idris --codegen javascript Main.idr -o pong.js`.

## Controls
Click the widget to start a game. In game, the paddle follows your mouse. The ball's velocity is changed every time it
hits a paddle: if it hits the center, its horizontal velocity increases; if it hits an edge, its vertical velocity is
adjusted in that direction. These effects are mediated by some parameters (see below).

Press escape at any time to quit a game (or cancel Attract Mode) and return to the menu.

## Parameters
These can be tweaked from the Main Menu and take effect when you start a new game. If you see a set of parameters you
like in Attract Mode, you can just click to start a game directly from there.
  * __AI Speed__: controls how quickly the AI paddle tracks the ball. Anything less than 6 is pretty easy. 8 is my personal
  favorite; anything more than 10 is pretty hard.
  * __Twist factor__: the maximum change in vertical velocity from hitting a paddle. Before being added to the paddle's
  vertical velocity, this value is scaled proportionally to the ball's distance from the paddle's center -- to add a lot
  of twist, hit with the edge!
  * __Paddle width__ and __height__ control the relevant dimensions of both paddles. Unfortunately, the two paddles
  cannot be made different sizes.
  * __Acceleration factor__: the dual of twist factor. This controls the maximum horizontal velocity added to the ball
  from a paddle collision (reached when the ball collides directly with the center of the paddle).
  * __Initial velocity X__ and __Y factors__: these scale the relevant components of the ball's velocity when the
  game starts. With a high X factor and a low Y factor, the ball will start out going almost straight across the screen.
  With a higher Y factor, the ball might make several top-to-bottom runs before crossing the screen even once.
