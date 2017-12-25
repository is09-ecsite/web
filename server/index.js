const compression = require('compression');
const path = require('path');
const express = require('express');
const app = express();

// Gzip
app.use(compression());

// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/../dist'));

// Start the app by listening on the default
// Heroku port
app.listen(4200);

// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/../dist/index.html'));
});

console.log('Server listening on 4200');


const assetsApp = express();
// Gzip
assetsApp.use(compression());

// Run the app by serving the static files
// in the dist directory
assetsApp.use(express.static(__dirname + '/../assets'));

// Start the app by listening on the default
// Heroku port
assetsApp.listen(8080);

console.log('Server listening on 8080');