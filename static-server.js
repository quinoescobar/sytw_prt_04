var static = require('node-static');

var fileServer = new static.Server('./');

<<<<<<< HEAD
console.log("Visitar http://10.6.128.92:8080/index.html");
=======
console.log("Visit http://10.6.128.92:8080/index.html");
>>>>>>> 349ce2967aef2f5034d82a61387c8fe2b271b36f
require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        fileServer.serve(request, response);
    }).resume();
}).listen(8080);
