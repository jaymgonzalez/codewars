// Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

//  Three 1's => 1000 points
//  Three 6's =>  600 points
//  Three 5's =>  500 points
//  Three 4's =>  400 points
//  Three 3's =>  300 points
//  Three 2's =>  200 points
//  One   1   =>  100 points
//  One   5   =>   50 point

// A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

// Example scoring

//  Throw       Score
//  ---------   ------------------
//  5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
//  1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
//  2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)

// In some languages, it is possible to mutate the input to the function. This is something that you should never do. If you mutate the input, you will not be able to pass all the tests.


function score(dice) {

  let scores = 0,
    ones = [],
    twos = [],
    threes = [],
    fours = [],
    fives = [],
    sixes = []


  for (let i = 0; i < dice.length; i++) {
    dice[i] === 1 ? ones.push(1) : false
    dice[i] === 2 ? twos.push(1) : false
    dice[i] === 3 ? threes.push(1) : false
    dice[i] === 4 ? fours.push(1) : false
    dice[i] === 5 ? fives.push(1) : false
    dice[i] === 6 ? sixes.push(1) : false
  }

  console.log(ones, twos, threes, fours, fives, sixes)

  if (ones.length > 0) {
    ones.length === 1 ? scores += 100 : false
    ones.length === 2 ? scores += 200 : false
    ones.length === 3 ? scores += 1000 : false
    ones.length === 4 ? scores += 1100 : false
    ones.length === 5 ? scores += 1200 : false
  }
  if (twos.length >= 3) {
    scores += 200
  }
  if (threes.length >= 3) {
    scores += 300
  }
  if (fours.length >= 3) {
    scores += 400
  }
  if (fives.length > 0) {
    fives.length === 1 ? scores += 50 : false
    fives.length === 2 ? scores += 100 : false
    fives.length === 3 ? scores += 500 : false
    fives.length === 4 ? scores += 550 : false
    fives.length === 5 ? scores += 600 : false
  }
  if (sixes.length >= 3) {
    scores += 600
  }
  console.log(scores);
  return scores
}

score([2, 3, 4, 6, 2])
score([4, 4, 4, 3, 3])
score([2, 4, 4, 5, 4])