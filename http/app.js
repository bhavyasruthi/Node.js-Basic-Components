var http = require('http');
http.createServer(sayHi).listen(3000);
console.log("server is listening");
function sayHi(request,response)
{
console.log("user requested"+request.url);
response.writeHead(200,{"contetType":"plain/text"});
response.write("hi user....");
response.end();
}