console.log("Hello World");

let Cal = require("./cal"); //modules
let a = 15;
let b = 10;
console.log ("add :" + Cal.add(a, b));
console.log("sub :" + Cal.sub(a, b));
console.log("mul :" + Cal.mul(a, b));

//http 
// A client( a browser) sends an HTTP request to the web
// An web server receives the request
// The server runs an application to process the request
// The server returns an HTTP Response(output) to the browser
// The client (the browser) receives the Response.

let http = require('http');
http.createServer(function(req, res){
    res.writeHead(200,{'content-type':'text/plain'});
    req.write("this is local server ");
})

http.createServer(function(req, res){
    res.writeHead(200,{'content-type':'text/plain'});
    res.write("my name is kamalnath ");
    res.end(" thank you");
}).listen(7700);


