const fs = require("fs");
const conc = require("/mnt/c/Users/User/Desktop/ProjectNode/app/concat.js");

const array = [10, 32, 36, 76];
const list = JSON.parse(fs.readFileSync("/mnt/c/Users/User/Desktop/ProjectNode/app/numbers.json")).numbers;
const bothLs = conc.Concated(array, list);

//synchronized
console.log("array: " + array + "\t" + "bothLs: " + bothLs);

//asynchronized
let promise = new Promise((resolve, reject) => {
    (bothLs.length > array.length) ? resolve("bothLs will be displayed: ") : reject("bothLs can't be displayed!")
})
promise.then(
    (message) => console.log(message + bothLs)
).catch((message) => console.log(message))


setTimeout(() => console.log("array: " + array), 3000)
setTimeout(() => console.log("bothLs: " + bothLs), 2000)