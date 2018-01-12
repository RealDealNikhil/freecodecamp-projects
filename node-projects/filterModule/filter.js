// filter module
var filter = require('./filterModule.js');

// use module
filter(process.argv[2], process.argv[3], callback)

// callback function
function callback(err, data) {
    if (err) {
        return console.log(err);
    }
    data.forEach(function (file) {
        console.log(file);
    });
}
