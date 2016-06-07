var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var sass = require('node-sass-middleware');
var flash = require('connect-flash');
var passport = require('passport');
var session = require('express-session');

module.exports = function() {
	var app = express();

	app.use(morgan('dev'));

	app.use(session({
		secret: 'dev_secret_key',
		resave: false,
		saveUninitialized: true
	}));

	app.use(passport.initialize());
	app.use(passport.session());
	app.use(flash());
	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(bodyParser.json());
	app.set('views', './app/views');
	app.set('view engine', 'jade');

	require('../app/routes/user')(app);

	app.use(sass({
		src: './public/sass',
		dest: './public/css',
		outputStyle: 'compressed',
		prefix: '/css',
		debug: true
	}));

	app.use(express.static('./node_modules'));
	app.use(express.static('./public'));

	return app;
};