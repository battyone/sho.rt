// Response Code (to be prepended to response):
// 1: OK
// 2: Invalid
var url = require("url");
// Express.js
var express = require("express");
var server = express();
// Redis.io
var redis = require("redis");
// Server settings
var host = 'localhost', port = 8080;
// Set directory
server.use(express.static(__dirname + "/www"));
// Handle JSON, multipart, urlencoding
server.use(express.bodyParser());
// Handle POST requests sent to /
server.post("/", function(request, response){
  if((request.body.action.toLowerCase() === "shorten") &&
      (request.body.url.length > 25)){
    var p = url.parse(request.body.url);
    var s = p['href'];
  }
});

server.listen(port, host);
