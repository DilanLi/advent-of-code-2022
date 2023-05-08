const fs = require("fs");
const data = fs.readFileSync("input.txt", "utf-8");

const campPairs = data.split("\n");

function findOverlap(pair) {
  const pairsArray = pair.split(",");
  const firstPair = pairsArray[0].split("-").map((n) => parseInt(n));
  const secondPair = pairsArray[1].split("-").map((n) => parseInt(n));
  const largerRangePair = findLargerRangePair(firstPair, secondPair);
  const smallerRangePair =
    firstPair === largerRangePair ? secondPair : firstPair;

  if (!largerRangePair) {
    // range overlapped, same exact numbers
    return true;
  }

  if (
    largerRangePair[0] <= smallerRangePair[0] &&
    largerRangePair[1] >= smallerRangePair[1]
  ) {
    return true;
  }

  return false;
}

function findLargerRangePair(first, second) {
  const firstNumberRange = first[1] - first[0] + 1;
  const secondNumberRange = second[1] - second[0] + 1;

  // range overlapped, same exact numbers
  if (firstNumberRange === secondNumberRange && first[1] === second[1]) {
    return null;
  }

  return firstNumberRange > secondNumberRange ? first : second;
}

const overlappedPairs = campPairs.filter((pair) => findOverlap(pair) === true);
console.log(overlappedPairs.length)
