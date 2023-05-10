const data = require('../utils/fetch_module')

const campPairs = data.split("\n");

function findLargerRangePair(first, second) {
  const firstNumberRange = first[1] - first[0] + 1;
  const secondNumberRange = second[1] - second[0] + 1;

  // range overlapped, same exact numbers
  if (firstNumberRange === secondNumberRange && first[1] === second[1]) {
    return null;
  }

  return firstNumberRange > secondNumberRange ? first : second;
}

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
    smallerRangePair[0] <= largerRangePair[1]
  ) {
    return true;
  } else if (
    largerRangePair[0] <= smallerRangePair[1] &&
    smallerRangePair[1] <= largerRangePair[1]
  ) {
    return true;
  }

  return false;
}

const overlappedPairs = campPairs.filter((pair) => findOverlap(pair)).length;
console.log(overlappedPairs);
