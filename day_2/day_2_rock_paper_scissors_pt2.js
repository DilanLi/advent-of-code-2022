const data = require("../day_3/fetch_module");

const calculateMyScore = (opponent, end) => { 
  const ROCK = 1;
  const PAPER = 2;
  const SCISSORS = 3;
  const WIN = 6;
  const DRAW = 3;
  const LOSE = 0;

  if (opponent === 'Rock') {
    if (end === 'win') {
      return PAPER + WIN;
    } else if (end === 'draw') {
      return ROCK + DRAW;
    } else if (end === 'lose') {
      return SCISSORS + LOSE;
    }
  }

  if (opponent === 'Paper') {
    if (end === 'win') {
      return SCISSORS + WIN;
    } else if (end === 'draw') {
      return PAPER + DRAW;
    } else if (end === 'lose') {
      return ROCK + LOSE;
    }
  }

  if (opponent === 'Scissors') {
    if (end === 'win') {
      return ROCK + WIN;
    } else if (end === 'draw') {
      return SCISSORS + DRAW;
    } else if (end === 'lose') {
      return PAPER + LOSE;
    }
  }
};

const translateOpponentHandShape = (letter) => {
  let shape;
  switch (letter) {
    case "A":
      shape = "Rock";
      break;
    case "B":
      shape = "Paper";
      break;
    case "C":
      shape = "Scissors";
      break;
  }
  return shape;
};

const translateMyRoundEnd = (letter) => {
  let end;
  switch (letter) {
    case "X":
      end = "lose";
      break;
    case "Y":
      end = "draw";
      break;
    case "Z":
      end = "win";
      break;
  }
  return end;
};

testData = 'A Y' + '\n' + 'B X' + '\n' + 'C Z';
const formattedRounds = data.split("\n");

const scoreArray = formattedRounds.map((round) => {
  const opponentShape = translateOpponentHandShape(round.split(" ")[0]);
  const myEnd = translateMyRoundEnd(round.split(" ")[1]);
  return calculateMyScore(opponentShape, myEnd);
});

const totalScore = scoreArray.reduce((accumulate, current) => {
  return accumulate + current;
}, 0);

console.log(totalScore);