// filesystem module
var fs = require('fs');

// path to directory
var path = process.argv[2];
// extension type for filter
var filter = process.argv[3];

// read directory
fs.readdir(path, callback);

// callback function
function callback(err, list) {
    if (err) {
        return console.log(err);
    }
    for (var i = 0; i < list.length; i++) {
        var fileType = list[i].split(".")[1];
        if (fileType === filter) {
            console.log(list[i]);
        }
    }
}
