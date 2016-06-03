var user = require('../controllers/user');
module.exports = function(app) {
	app.get('/', user.listUser);
	app.route('/login')
		.get(user.renderLogin)
		.post(user.login);

	app.route('/register')
		.get(user.renderRegister)
		.post(user.register);
}
