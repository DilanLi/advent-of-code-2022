const data = require('../utils/fetch_module');
const elf_calories = data.toString().split("\n");

const elfCalories = elf_calories.reduce(
  (acc, curr) => {
    if (curr === "") {
      acc.push([]);
    } else {
      acc[acc.length - 1].push(curr);
    }
    return acc;
  },
  [[]]
);

const caloriesSumArary = elfCalories.map((array) => {
  return array.reduce((total, num) => {
    return parseInt(total) + parseInt(num);
  }, 0);
});

const highestCalorie = Math.max(...caloriesSumArary);

const threeElvesWithHighestSumArray = (arr) => {
  let max1 = arr[0],
    max2 = arr[1],
    max3 = arr[2];

  for (let i = 3; i < arr.length; i++) {
    const current = arr[i];
    if (current > max1) {
      [max1, max2, max3] = [current, max1, max2];
    } else if (current > max2) {
      [max2, max3] = [current, max2];
    } else if (current > max3) {
      max3 = current;
    }
  }

  return [max1, max2, max3];
};

const threeElves = threeElvesWithHighestSumArray(caloriesSumArary);
const highestCalorieThreeElves = threeElves.reduce((accum, current) => {
  return accum + current;
}, 0);

console.log(highestCalorieThreeElves);
