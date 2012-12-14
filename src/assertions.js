var assert = require("assert");

exports.isNum = function(num){
  assert(num > -1 && num < Number.POSITIVE_INFINITY && !isNaN(num),
         "Input must be between 0-INF, and be a number." +
         "Input was " + num);
}

exports.isStr = function(str){
  assert(typeof str == "string", "Input must be a string");
}
