const fs = require("fs");
const dataStream = fs.readFileSync("input.txt", "utf-8");

let leftOverStream = dataStream;
let checkedStream = "";
let stopChecking = false;

function hasRepetitiveLetters(string) {
  const stringArray = string.split("");
  const uniqueCharacters = new Set(stringArray);
  if (uniqueCharacters.size === stringArray.length) {
  }
  return uniqueCharacters.size !== stringArray.length;
}

function findMarker() {
  const firstFourLetters = leftOverStream.substring(0, 4);
  const hasRepetitiveCharacters = hasRepetitiveLetters(firstFourLetters);

  if (hasRepetitiveCharacters) {
    checkedStream += firstFourLetters[0];
    leftOverStream = leftOverStream.substring(1);
  } else {
    stopChecking = true;
    checkedStream += firstFourLetters;
  }
}

let i = 0;

while (i < dataStream.length - 4 && !stopChecking) {
  findMarker();
  i++;
}

const firstMarkerAfterCharacter = checkedStream.length

console.log(firstMarkerAfterCharacter);
