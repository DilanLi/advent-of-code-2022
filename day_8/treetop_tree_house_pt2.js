const data = require("../utils/fetch_module").split("\n");

function findScenicScore(treesInOneDirection, comparedTree) {
  const blockingTree = treesInOneDirection.find((tree) => tree >= comparedTree);
  const scenicScore = blockingTree
    ? treesInOneDirection.splice(
        0,
        treesInOneDirection.indexOf(blockingTree.toString()) + 1
      ).length
    : treesInOneDirection.length;

  return scenicScore;
}

function determineRollScenicScore(roll, rollIndex) {
  const rollScenicScores = [];
  const rollOfTrees = Array.from(roll);
  for (let i = 0; i < rollOfTrees.length; i++) {
    let verticalRoll = [];
    data.forEach((roll) => verticalRoll.push(roll[i]));

    const treesOnTheLeft = rollOfTrees.slice(0, i).reverse();
    const treesOnTheRight = rollOfTrees.slice(i + 1);
    const treesOnTheTop = verticalRoll.slice(0, rollIndex).reverse();
    const treesOnTheBottom = verticalRoll.slice(rollIndex + 1);

    const rightScenicScore = findScenicScore(treesOnTheRight, rollOfTrees[i]);
    const leftScenicScore = findScenicScore(treesOnTheLeft, rollOfTrees[i]);
    const topScenicScore = findScenicScore(treesOnTheTop, rollOfTrees[i]);
    const bottomScenicScore = findScenicScore(treesOnTheBottom, rollOfTrees[i]);

    rollScenicScores.push(
      topScenicScore * leftScenicScore * rightScenicScore * bottomScenicScore
    );
  }
  return Math.max(...rollScenicScores);
}

const dataScenicScores = data.map((roll, rollIndex) =>
  determineRollScenicScore(roll, rollIndex)
);
const maxScenicScore = Math.max(...dataScenicScores);
console.log(maxScenicScore);
