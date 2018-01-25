var http = require('http');
var fs=require('fs');
http.createServer(serveRequest).listen(3001);
console.log("server is listening");
function serveRequest(request,response)
{
console.log("user requested"+request.url);
if(request.url == '/' && request.method == 'GET'){
response.writeHead(200,{"Content-Type":"text/html"});
fs.createReadStream("./index.html").pipe(response);
}
else{
 response.writeHead(404,{"contentType":"text/plain"});
response.write("404 ERROR : PAGE NOT FOUND");
response.end();
}

}