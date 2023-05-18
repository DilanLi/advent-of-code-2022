const data = require("../utils/fetch_module");
const terminalOutput = data.split("\n");

const root = [
  {
    name: "a",
    directories: [],
    files: [],
    size: 0,
  },
];

var allDirectories = terminalOutput.filter((command) =>
  command.startsWith("dir ")
);

var allDirectoriesNames = allDirectories.map((d) => d.substring(4));

const determineNextAction = (line) => {
  if (line.includes("cd")) {
    console.log("change dir ----------- ", line);
  } else if (line.includes("ls")) {
    console.log("list ----------------- ", line);
  } else if (line.includes("dir")) {
    console.log("directory ------------ ", line);
  } else if (!isNaN(line[0])) {
    console.log("file ----------------- ", line);
  } else {
  }
};

const sortInput = () => {
  // console.log(!isNaN(terminalOutput[3].charAt(0)) )

  terminalOutput.forEach((line) => determineNextAction(line));
};

sortInput();
