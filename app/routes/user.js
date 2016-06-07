var user = require('../controllers/user');
var passport = require('passport');
module.exports = function(app) {
	app.get('/', user.listUser);
	app.route('/login')
		.get(user.renderLogin)
		.post(passport.authenticate('local-login', {
			successRedirect: '/user',
			failureRedirect: '/login',
			failureFlash: true
		}));

	app.route('/register')
		.get(user.renderRegister)
		.post(user.register);
	app.route('/user')
		.get(user.renderUser);
}
