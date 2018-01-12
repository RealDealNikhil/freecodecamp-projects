// http module
var http = require('http');

// GET request
http.get(process.argv[2], callback)
    .on("error", console.error);

function callback (response) {
    var output = "";
    var length = 0;

    // emit string rather than buffer
    response.setEncoding('utf8');

    // collect on every data event
    response.on("data", function(data) {
        output += data;
        length += data.length;
    });

    // error
    response.on("error", console.error);

    // end - print output
    response.on("end", function() {
       console.log(length + "\n" + output);
    });
}
