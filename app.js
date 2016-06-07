var mongoose = require('./config/mongoose');
var express = require('./config/express');
var passport = require('./config/passport');
var port = process.env.port || 5555;

var db = mongoose();
var app = express();
var passport = passport();

// module.exports = app;

app.listen(port, function() {
    console.log('Starting node on port: ' + port);
});
