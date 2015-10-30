var static = require('node-static');

var fileServer = new static.Server('./');

console.log("Visitar http://10.6.128.92:8080/index.html");
require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        fileServer.serve(request, response);
    }).resume();
}).listen(8080);
