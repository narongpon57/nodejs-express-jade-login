var mongoose = require('mongoose');

module.exports = function() {
	mongoose.set('debug', true);
	var db = mongoose.createConnection('mongodb://localhost/demo');
	require('../app/models/user');
	// return db;
}