// NODE Libraries
var http = require("http"), fs = require("fs"), url = require("url"), 
  path = require("path");
// Express.js
var express = require("express")
var server = express();
// Server settings
var host = 'localhost', port = 8080;

server.use(express.static(__dirname + "/www"));
server.post("/", function(request, response){
  console.log(request);
});

server.listen(port, host);
