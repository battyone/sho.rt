var http = require("http"), fs = require("fs");
var server = require("express")();
var root = ".";
//var path = 
// Begin GET routers
server.get("/", function(request, response){
  request.on("end", function(){
    console.log(request.headers);
  });
});

server.get("..", function(request, response){
  request.on("end", function(){
    // send Invalid request page/header
  });
});
// End GET routers
server.listen(8080);
