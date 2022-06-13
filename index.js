const fs = require("fs");
const conc = require("./concat.js");
const sum = require("./arraysSum");

const array = [10, 32, 36, 76];
const list = JSON.parse(fs.readFileSync("./numbers.json")).numbers;
const bothLs = conc.concat(array, list);

console.log(`Sum of element in array ${sum.Sum(bothLs)}`);