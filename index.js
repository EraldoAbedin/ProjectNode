const fs = require("fs");
const conc = require("./concat.js");

const array = [10, 32, 36, 76, 84];
const list = JSON.parse(fs.readFileSync("./numbers.json")).numbers;


const res = conc.concat(array, list);
console.log(res);   