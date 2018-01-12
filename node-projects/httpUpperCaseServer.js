// http and map modules
var http = require('http');
var map = require('through2-map');

// get port
var port = process.argv[2];

// create http server
var server = http.createServer(function (req, res) {
    // only accept post requests
    if (req.method !== 'POST') {
        return res.end('must be a POST request.\n');
    }

    // takes chunk of data, converts to upper case, returns chunk of data
    req.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase();
    })).pipe(res);
});

// listen for connections
server.listen(port);
