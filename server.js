// 1: OK
// 2: Invalid Protocol (for now, only HTTP is allowed)
// 3: URL too short (set minUrlLength to specify this)
var url = require("url"), path = require("path");
// Express.js / Redis.io
var express = require("express");
var server = express();
var redis = require("redis");
// Local settings
var host = 'localhost', port = 80, next = 16777216, minUrlLength = 25;
require("./sho.rt");
var Short = new Base64();
server.use(express.static(__dirname + "/www")); // Sets directory
server.use(express.bodyParser()); // Handles JSON, multipart, urlencoding
// Handle POST requests sent to /
server.post("/", function(request, response){
  var r = processRequest(request);
  response.write(JSON.stringify(r));
  response.end();
});

// Handles a shorten request. Returns a Serve object
function processRequest(request) {
  var r = new Serve();
  if((request.body.action.toLowerCase() === "shorten") &&
      (request.body.url.length > minUrlLength)){
    var p = url.parse(request.body.url);
    if (p.protocol === undefined || p.protocol == "http:"){
  //    var db = redis.createClient();
      console.log(p);
      var s = p['href'];
      r.mcd = 1;
      r.msg = path.join(host, Short.encode(next++));
      console.log(r.msg);
  //    db.set(
      console.log(JSON.stringify(r));
    } else {
      //Invalid protocol
      r.mcd = 2;
      r.msg = "Invalid protocol";
    }
  } else {
    r.mcd = 3;
    r.msg = "URL too short";
  }
  return r;
}

Serve = function(){
  this.mcd; // message code
  this.msg;
};

server.use(function(request, response, next) {
  response.send(404);
});
server.listen(port, host);
