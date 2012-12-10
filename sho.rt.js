assert = require("assert");
// Handle Base64 conversion
Base64 = (function(){
  var _self = this;
  var _key = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-";
  // Constructor
  encoder = function(){
  };
  // Given a number, create a hash
  encoder.prototype.encode = function(number){
    assert(number>-1, "Input must be positive");
    assert(Number(number) !== Number.POSITIVE_INFINITY && number !==null &&
          !isNaN(Number(number)), "Invalid input. Detected NaN, Inf or null");
    var s = "";
    var remainder = parseInt(number*64);
    while (remainder !== 0) {
      s += _key.charAt(remainder % 64);
      remainder = Math.floor(remainder / 64);
    }
    return s;
  };
  // Given a hash (string), return its numeric value
  encoder.prototype.decode = function(string){
    assert(typeof string == "string", "Attempting to decode non-string input");
      var val = 0;
      var vals = [];
      for (atom in string.split('')){
        vals.push(_key.indexOf(string[atom]));
      }
      for (ele in vals){
        val += vals[ele]*Math.pow(64, ele);
      }
      return val;
  };
  return encoder;
})();
