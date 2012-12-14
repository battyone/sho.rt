var assert = require("assert"), util = require("util");
require("./sho.rt");
// Begin tests
Short = new Base64();
var testEncode = 393216, testDecode = "AAgB";
if (encodeTest(testEncode, testDecode)){
  util.print("result was " + Short.encode(testEncode) + ". Success!\n");
}
if (decodeTest(testDecode, testEncode)){
  util.print("result was " + Short.decode(testDecode) + ". Success!\n");
}
// End tests
function encodeTest(number, expected){
  util.print("Encoding " + number + "... ");
  assert(Short.encode(number) == expected, "Error encoding " + number +
      ". Expected " + expected + ", result was " + Short.encode(number));
  return true;
}

function decodeTest(string, expected){
  util.print("Decoding " + string + "... ");
  assert(Short.decode(string) == expected, "Error decoding " + string +
      ". Expected " + expected + ", result was " + Short.decode(string));
  return true;
}
