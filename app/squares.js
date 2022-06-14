const ld = require("lodash");

const sumOfSquares = (number) =>
    ld.chain(number)
    .range()
    .map((x) => x ** 2)
    .reduce((x,y) => x + y)
    .value()

module.exports.sumOfSquares = sumOfSquares;