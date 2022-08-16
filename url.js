//Parse an address with the url.parse() method, and it will return a URL object with each part of the address as properties:

let url = require('url');
let address = "http://localhost:9000/user?country=India&city=Delhi";
let urlObject = url.parse(address, true);
console.log(urlObject.host);             //localhost:9000
console.log(urlObject.pathname);         //user
console.log(urlObject.search);           //?country=India&city=Delhi
console.log(urlObject.query);
console.log(urlObject.query.country);
console.log(urlObject.query.city);


let http = require('http');
//let url = require('url');
let fs = require('fs');

let server = http.createServer(function(req, res){
    let urlobj = url.parse(req.url, true);
    let fileName = "test.html" + urlobj.pathname;
    fs.readFile(fileName, function(err, data){
        if(err) {
            res.writeHead(404, {'content-type':'text/html'});
            return res.end("404 Not Found");
        }
        res.writeHead(200,{'content-type':'text/html'});
        res.write(data);
        res.end();
    });
}).listen(7900);
