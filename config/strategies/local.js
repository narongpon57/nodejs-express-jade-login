var flash = require('connect-flash');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('mongoose').model('User');

module.exports = function() {
	passport.use('local-login', new LocalStrategy({
		passReqToCallback: true
	}, 
	function(req, username, password, done) {
		User.findOne({username: username}, function(err, user) {
			if(err)
				return done(err);
			if(!user)
				return done(null, false, req.flash('loginError', 'Username not found.'));
			if(!user.validPassword(password))
				return done(null, false, req.flash('loginError', 'Oops! Wrong Password.'));
			return done(null, user);
		});
	}));
};