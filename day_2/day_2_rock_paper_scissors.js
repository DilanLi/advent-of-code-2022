const data = require('../day_3/fetch_module');

const calculateScores = (opponent, me) => {
  if (opponent === "Rock" && me === "Paper") {
    return 6 + 2;
  } else if (opponent === "Paper" && me === "Scissors") {
    return 6 + 3;
  } else if (opponent === "Scissors" && me === "Rock") {
    return 6 + 1;
  } else if (opponent === me) {
    let shapeScore;
    if (me === "Rock") {
      shapeScore = 1;
    } else if (me === "Paper") { 
      shapeScore = 2;
    } else if (me === "Scissors") {
      shapeScore = 3;
    }
    return 3 + shapeScore;
  } else if (opponent === "Rock" && me === "Scissors") {
    return 0 + 3;
  } else if (opponent === "Paper" && me === "Rock") {
    return 0 + 1;
  } else if (opponent === "Scissors" && me === "Paper") {
    return 0 + 2;
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

const translateMyHandShape = (letter) => {
  let shape;
  switch (letter) {
    case "X":
      shape = "Rock";
      break;
    case "Y":
      shape = "Paper";
      break;
    case "Z":
      shape = "Scissors";
      break;
  }
  return shape;
};
testData = 'A Y' + '\n' + 'B X' + '\n' + 'C Z';
const formattedRounds = data.split("\n");

const scoreArray = formattedRounds.map((round) => {
  const opponentShape = translateOpponentHandShape(round.split(" ")[0]);
  const myShape = translateMyHandShape(round.split(" ")[1]);
  return calculateScores(opponentShape, myShape);
});

const totalScore = scoreArray.reduce((accumulate, current) => {
  return accumulate + current;
}, 0);

console.log(formattedRounds);

