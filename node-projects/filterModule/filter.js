// filter module
var filterModule = require('./filterModule.js');

// use module
filterModule(process.argv[2], process.argv[3], callback)

// callback function
function callback(err, data) {
    if (err) {
        return console.log(err);
    }
    data.forEach(function (file) {
        console.log(file);
    });
}
