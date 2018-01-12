// net and strftime modules
var net = require('net');
var strftime = require('strftime');

// create TCP server and write current date to socket
var server = net.createServer(function(socket) {
    var date = strftime('%F %H:%M', new Date());
    socket.end(date + "\n");
});

// listen for connections
server.listen(process.argv[2]);
