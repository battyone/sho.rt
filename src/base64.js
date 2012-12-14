// Handle Base64 conversion
var _key = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-";
var assert = require("./assertions");

var encoder = function(r, s) {
  return !!r ? encoder(Math.floor(r/64), s + _key.charAt(r % 64)) 
             : (!!s ? s : _key.charAt(r));
}

exports.encode = function(num) {
  assert.isNum(num);
  return encoder(parseInt(num), "");
}

var indexOf = function(c) {
  return _key.indexOf(c);
}
var exponent = function(acc, ele, i) {
  return acc + ele * Math.pow(64, i);
}

exports.decode = function(str) {
  assert.isStr(str);
  return str.split('').map(indexOf).reduce(exponent);
}

