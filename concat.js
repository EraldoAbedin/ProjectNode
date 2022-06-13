const fs = require("fs");
const ld = require("lodash");

Concat = (x, y) => { return ld.concat(x, y); }
module.exports.concat = Concat;
