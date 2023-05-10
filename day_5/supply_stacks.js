const data = require("../utils/fetch_module");
const movingInstruction = data.split("\n");

let stack = {
  1: ["Q", "F", "M", "R", "L", "W", "C", "V"],
  2: ["D", "Q", "L"],
  3: ["P", "S", "R", "G", "W", "C", "N", "B"],
  4: ["L", "C", "D", "H", "B", "Q", "G"],
  5: ["V", "G", "L", "F", "Z", "S"],
  6: ["D", "G", "N", "P"],
  7: ["D", "Z", "P", "V", "F", "C", "W"],
  8: ["C", "P", "D", "M", "S"],
  9: ["Z", "N", "W", "T", "V", "M", "P", "C"],
};

function moveCrate(instruction) {
  const startingStack = instruction[1];
  const endingStack = instruction[2];
  const numberOfCratesToMove = instruction[0];

  const originalStartingStackArray = stack[startingStack];
  const endingStackArray = stack[endingStack];
  const splitPoint = originalStartingStackArray.length - numberOfCratesToMove;
  const cratesToBeMovedArray = originalStartingStackArray
    .splice(splitPoint)
    .reverse();

  stack[startingStack] = originalStartingStackArray.splice(0, splitPoint);
  stack[endingStack] = [...endingStackArray, ...cratesToBeMovedArray];

  return stack;
}

function moveMultipleCrates(instruction) {
  const startingStack = instruction[1];
  const endingStack = instruction[2];
  const numberOfCratesToMove = instruction[0];

  const originalStartingStackArray = stack[startingStack];
  const endingStackArray = stack[endingStack];
  const splitPoint = originalStartingStackArray.length - numberOfCratesToMove;
  const cratesToBeMovedArray = originalStartingStackArray.splice(splitPoint);

  stack[startingStack] = originalStartingStackArray.splice(0, splitPoint);
  stack[endingStack] = [...endingStackArray, ...cratesToBeMovedArray];

  return stack;
}

function deconstructMovingInstruction(instruction) {
  const instructionArray = instruction.split(" ");
  return [
    parseInt(instructionArray[1]),
    parseInt(instructionArray[3]),
    parseInt(instructionArray[5]),
  ];
}

const formattedInstructionList = movingInstruction.map((instruction) =>
  deconstructMovingInstruction(instruction)
);

//pt.1
// const letsMoveTheseCrates = formattedInstructionList.map((instruction) =>
//   moveCrate(instruction)
// );
// const finalStack = letsMoveTheseCrates[letsMoveTheseCrates.length - 1];
// let topCrates = "";

// for (let key in finalStack) {
//   const crateArray = finalStack[key];
//   topCrates += crateArray[crateArray.length - 1];
// }
// console.log(topCrates)

// pt.2
const letsMoveTheseCratesPt2 = formattedInstructionList.map((instruction) =>
  moveMultipleCrates(instruction)
);
let topCratesPt2 = "";
const finalStackPt2 = letsMoveTheseCratesPt2[letsMoveTheseCratesPt2.length - 1];
for (let key in finalStackPt2) {
  const crateArray = finalStackPt2[key];
  topCratesPt2 += crateArray[crateArray.length - 1];
}
console.log(topCratesPt2);
