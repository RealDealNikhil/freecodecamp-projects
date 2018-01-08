// filesystem module
var fs = require('fs');
// path module
var path = require('path');

// single function module, functional filtering
module.exports = function(dir, ext, callback) {
    fs.readdir(dir, function(err, data) {
        if (err) {
            return callback(err);
        }
        data = data.filter(function (file) {
           return path.extname(file) === '.' + ext;
        });
        callback(null, data);
    });
};
