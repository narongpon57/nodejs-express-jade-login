var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = mongoose.Schema({
	username: {type: String, required: true, unique: true},
	password: {type: String, required: true},
	firstName: String,
	lastName: String,
	email: String
});

mongoose.connect('mongodb://localhost:27017/demo');
module.exports = mongoose.model('users', userSchema);