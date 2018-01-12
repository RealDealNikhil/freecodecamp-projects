// http and url modules
var http = require('http');
var url = require('url');

// get port
var port = process.argv[2];

// create server
var server = http.createServer(function (req, res) {
    var urlInfo = url.parse(req.url, true);
    var route = urlInfo.pathname;
    var query = urlInfo.query.iso;
    var data;

    // check for valid routes
    if (route == '/api/parsetime') {
        var date = new Date(query);
        data = {
            'hour': date.getHours(),
            'minute': date.getMinutes(),
            'second': date.getSeconds()
        };
    }

    if (route == '/api/unixtime') {
        data = {
            'unixtime': (new Date(query)).getTime()
        };
    }

    // send corresponding response
    if (data) {
        // Set the response HTTP header with HTTP status and Content type
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(data));
    } else {
        res.writeHead(404, {'error': 'Invalid Route'});
        res.end();
    }

});

server.listen(port);
