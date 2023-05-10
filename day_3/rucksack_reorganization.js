const data = require('../utils/fetch_module')
const itemsArray = data.split("\n");

function findCommonItemType(item) {
  const halfLength = item.length / 2;
  const firstItem = item.slice(0, halfLength).split("");
  const secondItem = item.slice(halfLength, item.length).split("");
  const commonLetterArray = firstItem.filter((l) => {
    return secondItem.includes(l);
  });
  return commonLetterArray[0];
}

const commonItemArray = itemsArray.map((rucksack) =>
  findCommonItemType(rucksack)
);

function findPriority(letter) {
  const lowercaseList = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  if (lowercaseList.includes(letter)) {
    return lowercaseList.findIndex((l) => l === letter) + 1;
  } else {
    return lowercaseList.findIndex((l) => l === letter.toLowerCase()) + 1 + 26;
  }
}

const priorityArray = commonItemArray.map((item) => findPriority(item));
const sum = priorityArray.reduce((accum, current) => accum + current);

function divideList(list) {
  const result = [];
  let temp = [];

  for (let i = 0; i < list.length; i++) {
    temp.push(list[i]);

    if ((i + 1) % 3 === 0) {
      result.push(temp);
      temp = [];
    }
  }

  if (temp.length > 0) {
    result.push(temp);
  }

  return result;
}

const elvesByThree = divideList(itemsArray);

function findBadge(threeElves) {
  let commonItemArray = [];
  const firstElf = threeElves[0].split("");
  const secondElf = threeElves[1].split("");
  const thirdElf = threeElves[2].split("");

  commonItemArray = firstElf.filter((l) => secondElf.includes(l));
  commonItem = thirdElf.filter((l) => commonItemArray.includes(l))[0];
  return commonItem;
}

const badgeArray = elvesByThree.map((three) => findBadge(three));
const badgePriorityArray = badgeArray.map((badge) => findPriority(badge));
const badgeSum = badgePriorityArray.reduce((accum, current) => accum + current);
console.log(badgeSum);
