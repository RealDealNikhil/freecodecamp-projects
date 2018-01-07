// filesystem module
var fs = require('fs');

// read file, save in buffer object
var buffer = fs.readFileSync(process.argv[2]);
// convert file to string
var file = buffer.toString();

var newlines = file.split("\n");

console.log(newlines.length - 1);
