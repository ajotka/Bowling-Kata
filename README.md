## How to install and run?

```
yarn install # install dependencies using yarn
yarn test # run tests
```

## Bowling game description
The game consists of 10 frames as shown above. In each frame the player has
two opportunities to knock down 10 pins.  The score for the frame is the total
number of pins knocked down, plus bonuses for strikes and spares.

A spare is when the player knocks down all 10 pins in two tries.  The bonus for
that frame is the number of pins knocked down by the next roll.  So in frame 3
above, the score is 10 (the total number knocked down) plus a bonus of 5 (the
number of pins knocked down on the next roll.)

A strike is when the player knocks down all 10 pins on his first try.  The bonus
for that frame is the value of the next two balls rolled.

In the tenth frame a player who rolls a spare or strike is allowed to roll the extra
balls to complete the frame.  However no more than three balls can be rolled in
tenth frame.

This kata's source is: http://butunclebob.com/ArticleS.UncleBob.TheBowlingGameKata


## Tests
Each result was checked using the calculator:
http://www.bowlinggenius.com/

* dead ball / gutter - all balls in gutter or just 20 misses
* all ones - all throws with 1 point
* one spare only - one spare and misses
* one spare + 3 bonus rolls
* one strike only - one strike and misses
* one strike with bonus - one strike, next 3 + 4, and misses
* perfect game - 12 strikes
* 10 pairs of 9 and miss
* 10 pairs of 5 and spare, with a final 5
* incorrect number of frames (count for first 20 throws)

## Style Standard
https://google.github.io/styleguide/jsguide.html