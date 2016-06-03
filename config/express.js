var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

module.exports = function() {
	var app = express();

	app.use(morgan('dev'));
	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(bodyParser.json());
	app.set('views', './app/views');
	app.set('view engine', 'jade');

	require('../app/routes/user')(app);

	app.use(express.static('./node_modules'));
	app.use(express.static('./public'));

	return app;
};