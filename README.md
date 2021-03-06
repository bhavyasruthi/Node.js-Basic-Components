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
- app.js : In this file, we created server listening on port 3000 and given plain text to response. Once we send request on port 3000 , we can see response.
- home.js : In home.js file, we used fileSystem module of node and given content-Type of response as text/html. fileSystem module reads html file(index.html) contents using createReadStream() which is piped to response object. Server is created and listening on 3001 port. Once we send request on this port, we can see response in the form of html.

We can also do some other tasks using web server created by http module -
- Accessing Header : If the response from the HTTP server is supposed to be displayed as non-plain text, you should include an HTTP header with the correct content type. We can set content-type as :  
response.writeHead(200,{"contentType":"<type>"});
- Reading Query String : The function passed into the http.createServer() has a req argument that represents the request from the client, as an object (http.IncomingMessage object).This req object has a property called "url" which holds the part of the url that comes after the domain name
- Accessing Query String : There are built-in modules to easily split the query string into readable parts, such as the URL module.

2)Web client: We can create a simple web client to send any request using http by createClient().This function is deprecated now so we can use http.request(options,[callback]) instead. It constructs a new HTTP client in which port,host,socket etc., details are specified in options parameter that refers to the server to be connected to and the optional callback parameter will be added as a one-time listener for the 'response' event. npm package 'request' is using currently to send request than using http.request().

### Project Folder : CoreModules
This project uses fs module. File system module allow you to work with the file system on your computer.To include the File System module, use the require() method:
```
var fs = require('fs');
```
Common use for the File System module:
1)Read files - fs.readFile() method is used to read files on your computer. Syntax: ```fs.readFile('<file name>', <callback>);```
2)Create files - File System methods for creating new files:
- fs.appendFile() : The fs.appendFile() method appends specified content to a file. If the file does not exist, the file will be created. Syntax : ```fs.appendFile('<file name>', <callback>);```
- fs.open() : fs.open() method takes a "flag" as the second argument, if the flag is "w" for "writing", the specified file is opened for writing. If the file does not exist, an empty file is created. Syntax : ```fs.open('<file name>',' <mode>', <callback>);```
- fs.writeFile() : fs.writeFile() method replaces the specified file and content if it exists. If the file does not exist, a new file, containing the specified content, will be created. Syntax :```fs.readFile('<file name>', <data>, <callback>);```

3)Update files - The File System methods for updating files:
- fs.appendFile() : This method appends the specified content at the end of the specified file.
- fs.writeFile() : This method replaces the specified file and content.

4)Delete files -To delete a file with the File System module,  use the fs.unlink() method. Syntax: ```fs.unlink('<file name>', <callback>);```

5)Rename files - To rename a file with the File System module,  use the fs.rename() method. Syntax: ```fs.unlink('<old file name>',  '<old file name>', <callback>);```

- app_file.js : We used writeFileSync(), writeFile() to craete and write data to 2 files 'data.txt' and 'fs.tmp'

### Project Folder : Hellonode(require)
Node uses two core modules for managing module dependencies:
- The require module, which appears to be available on the global scope — no need to require('require').
- The module module, which also appears to be available on the global scope — no need to require('module').
- data.js :In this file we exported required(public) data using module.exports. So, that outside files can access/ resuse this data.
   ```module.exports.<variable name to use outside> = <which variable you need to export>; ```
- app.js :In this file, we imported data from data.js file using require(). 
   ```var myData = module.require("<file you need to import>");```
   
### Project Folder : callback
Node.js application, then callbacks are its veins. They enable a balanced, non-blocking flow of asynchronous control across modules and applications. But for callbacks to work at scale you’ll needed a common, reliable protocol. The “error-first” callback (also known as an “errorback”, “errback”, or “node-style callback”) was introduced to solve this problem, and has since become the standard for Node.js callbacks.There’s really only two rules for defining an error-first callback:
- The first argument of the callback is reserved for an error object. If an error occurred, it will be returned by the first err argument.
- The second argument of the callback is reserved for any successful response data. If no error occurred, err will be set to null and any successful data will be returned in the second argument.
- app.js : File we used callback function to serve order and place order asynchronously so that desired output is correct.
