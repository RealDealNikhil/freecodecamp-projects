// http module
var http = require('http');

// GET request
http.get(process.argv[2], callback)
    .on("error", console.error);

// callback
function callback (response) {
    // emit String rather than Buffer
    response.setEncoding('utf8');
    response.on("error", console.error);
    response.on("data", console.log);
}
