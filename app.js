var mongoose = require('./config/mongoose');
var express = require('./config/express');
var port = process.env.port || 5555;

var db = mongoose();
var app = express();

module.exports = app;

app.listen(port, function() {
    console.log('Starting node on port: ' + port);
});
