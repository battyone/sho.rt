var assert = require("assert"), util = require("util");
var s = require("../src/base64");
var encTests = [0, 1, 2, 3, 63, 64, 393216];
var decTests = ["A", "B", "C", "D", "-", "AB", "AAgB"];
// Begin tests
for (var i = 0; i < encTests.length; i++)
{
  if (encodeTest(encTests[i], decTests[i]))
    util.print("result was " + s.encode(encTests[i]) + ". Success!\n");
  if (decodeTest(decTests[i], encTests[i]))
    util.print("result was " + s.decode(decTests[i]) + ". Success!\n");
}
// End tests
function encodeTest(number, expected){
  util.print("Encoding " + number + "... ");
  assert(s.encode(number) == expected, "Error encoding " + number +
      ". Expected " + expected + ", result was " + s.encode(number));
  return true;
}

function decodeTest(string, expected){
  util.print("Decoding " + string + "... ");
  assert(s.decode(string) == expected, "Error decoding " + string +
      ". Expected " + expected + ", result was " + s.decode(string));
  return true;
}
