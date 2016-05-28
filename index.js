var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var db = require('./models/users');

var app = express();
var port = process.env.port || 5555;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

require('./routes/routes.js')(app, db);

app.listen(port, function() {
    console.log('Starting node on port: ' + port);
});
