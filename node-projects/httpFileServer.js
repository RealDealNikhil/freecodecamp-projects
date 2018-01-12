// use http and fs modules
var http = require('http');
var fs = require('fs');

// get port and path to file
var port = process.argv[2];
var path = process.argv[3];

// create http server
var server = http.createServer(function (req, res) {
    var readStream = fs.createReadStream(path);
    readStream.pipe(res);
});

// listen for connections
server.listen(port);
