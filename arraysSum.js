const ld = require("lodash");
const Sum = (ls) => {
  return ld.reduce(ls, (x, y) => x+y);
}

module.exports.Sum = Sum;