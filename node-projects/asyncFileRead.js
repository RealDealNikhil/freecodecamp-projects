// filesystem module
var fs = require('fs');

// path to file
var path = process.argv[2];

// asyncronously read file
fs.readFile(path, finishedReading);

// callback function
function finishedReading(err, buffer) {
    if (err) {
        return console.log(err);
    }
    var file = buffer.toString();
    var newlines = file.split("\n");
    console.log(newlines.length - 1);
}
