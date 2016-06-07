var User = require('mongoose').model('User');

exports.listUser = function(req, res) {
	User.find({}, function(err, user) {
		if(err) res.json(err);
		else res.json(user);
	})
}
exports.renderLogin = function(req, res) {
	res.render('login', {
		title: 'Login',
		messages: req.flash('loginError')
	});
}

exports.login = function(req, res) {
	var username = req.body.username;
	var password = req.body.password;
	User.find({
		username: username,
		password: password
	}, function(err) {
		if (err) 
			res.json(err);
		else 
			res.redirect('/user');
		
	})
}

exports.renderRegister = function(req, res) {
	res.render('register', {
		title: 'Register'
	});
}

exports.register = function(req, res) {
	var user = new User(req.body);
	user.save(function(err, user) {
		if (err) 
			res.redirect('/register');
		else 
			res.redirect('/login');
	});
}

exports.renderUser = function(req, res) {
	User.find({}, function(err, user) {
		if (err)
			res.json(err);
		else
			res.render('user', {
				title: 'User',
				users: user
			})
	});
};