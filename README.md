# Node.js-Basic-Components
This repository contains projects using basic features of Node.js 

### Project Folder : http
This project uses http module. It is built-in module which allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP).To include the HTTP module, use the require() method:
   ```
   var http = require('http');
   ```
1)Web Server: We can create a simple web server to respond to any request using http. This will create a server and listen for any kind of HTTP request on the given URL when one is received, it will send a given response in content-type provided.
``` 
http.createServer(sayHi).listen(3000);
```
app.js : In this file, we created server listening on port 3000 and given plain text to response. Once we send request on port 3000 , we can see response.
Home.js : In home.js file, we used fileSystem module of node and given content-Type of response as text/html. fileSystem module reads html file(index.html) contents using createReadStream() which is piped to response object. Server is created and listening on 3001 port. Once we send request on this port, we can see response in the form of html.

We can also do some other tasks using web server created by http module -
- Accessing Header : If the response from the HTTP server is supposed to be displayed as non-plain text, you should include an HTTP header with the correct content type. We can set content-type as :  
response.writeHead(200,{"contentType":"plain/text"});
- Reading Query String : The function passed into the http.createServer() has a req argument that represents the request from the client, as an object (http.IncomingMessage object).This req object has a property called "url" which holds the part of the url that comes after the domain name
- Accessing Query String : There are built-in modules to easily split the query string into readable parts, such as the URL module.

2)Web client: We can create a simple web client to send any request using httpusing createClient().This function is deprecated now so we can use http.request(options,[callback]) instead. It constructs a new HTTP client in which port,host,socket etc., details are specified in options parameter that refers to the server to be connected to and the optional callback parameter will be added as a one-time listener for the 'response' event. npm package - request is using currently to send request than using this.
