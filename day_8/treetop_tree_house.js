const data = require("../utils/fetch_module").split("\n");

// const testData = ["30373", "25512", "65332", "33549", "35390"];

function findVisibleEdgeTrees(data) {
  // top + bottom + 2 for all the middle rows (first & last tree)
  return data[0].length * 2 + (data.length - 2) * 2;
}

const numberOfVisibleTreesOnTheEdge = findVisibleEdgeTrees(data);

function determineRollVisibility(roll, rollIndex) {
  let visibleTrees = [];
  // do not have to count first or last tree
  for (let i = 1; i < roll.length - 1; i++) {
    let verticalRoll = [];
    data.forEach((roll) => verticalRoll.push(roll[i]));

    const treesOnTheLeft = Array.from(roll.slice(0, i));
    const treesOnTheRight = Array.from(roll.slice(i + 1));
    const treesOnTheTop = verticalRoll.slice(0, rollIndex);
    const treesOnTheBottom = verticalRoll.slice(rollIndex + 1);

    const visibleFromLeft = treesOnTheLeft.every((tree) => tree < roll[i]);
    const visibleFromRight = treesOnTheRight.every((tree) => tree < roll[i]);
    const visibleFromTop = treesOnTheTop.every((tree) => tree < roll[i]);
    const visibleFromBottom = treesOnTheBottom.every((tree) => tree < roll[i]);

    if (
      visibleFromLeft ||
      visibleFromRight ||
      visibleFromTop ||
      visibleFromBottom
    ) {
      visibleTrees.push(roll[i]);
    }
  }
  return visibleTrees;
}

let visibleTreesInTheMiddle = [];
// check only the rolls that are in the middle since all edge trees are visible
const rollsToCheck = data.slice(1, data.length - 1);

// don't know why my for loop didn't work here, so using a forEach and modifying the index...
rollsToCheck.forEach((roll, rollIndex) =>
  {
    visibleTreesInTheMiddle.push(...determineRollVisibility(roll, (parseInt(rollIndex) + 1)))}
);

const numberOfVisibleTrees = numberOfVisibleTreesOnTheEdge + visibleTreesInTheMiddle.length;
console.log('visible trees: ' + numberOfVisibleTrees)