// filesystem module
var fs = require('fs');

// asyncronously read file
fs.readFile(process.argv[2], function(err, buffer) {
    if (err) {
        return console.log(err);
    }
    var file = buffer.toString();
    var newlines = file.split("\n");
    console.log(newlines.length - 1);
});
