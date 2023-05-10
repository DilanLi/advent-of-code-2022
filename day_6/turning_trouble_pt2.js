const dataStream = require("../utils/fetch_module");

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
  const firstFourteenLetters = leftOverStream.substring(0, 14);
  const hasRepetitiveCharacters = hasRepetitiveLetters(firstFourteenLetters);

  if (hasRepetitiveCharacters) {
    checkedStream += firstFourteenLetters[0];
    leftOverStream = leftOverStream.substring(1);
  } else {
    stopChecking = true;
    checkedStream += firstFourteenLetters;
  }
}

let i = 0;

while (i < dataStream.length - 14 && !stopChecking) {
  findMarker();
  i++;
}

const firstMarkerAfterCharacter = checkedStream.length

console.log(firstMarkerAfterCharacter);