// http and bl modules
var http = require('http');
var bl = require('bl');

// Number of requests we want
const numRequests = 3;

// To store async results in correct order
var numResults = 0;
var results = [];

function printResults() {
    for (var i = 0; i < results.length; i++) {
        console.log(results[i]);
    }
}

// GET request
function httpGet(index) {
    http.get(process.argv[2 + index], function(response) {
       response.pipe(bl(function(err, data) {
           if (err) {
               console.error(err);
           }

           results[index] = data.toString();
           numResults++;
           if (numResults == numRequests) {
               printResults();
           }
       }));
    });
}

// Get all 3 async requests
for (var i = 0; i < numRequests; i++) {
    httpGet(i);
}

