var User = require('mongoose').model('user');

exports.listUser = function(req, res) {
	User.find({}, function(err, user) {
		if(err) res.json(err);
		else res.json(user);
	})
}
exports.renderLogin = function(req, res) {
	res.render('login', {
		title: 'Login'
	});
}

exports.login = function(req, res) {
	console.log('login');
}

exports.renderRegister = function(req, res) {
	res.render('register', {
		title: 'Register'
	});
}

exports.register = function(req, res) {
	var user = new User(req.body);
	user.save(function(err, user) {
		if (err) res.json(err);
		else res.redirect('/login');
	});
}