module.exports = function(app, db) {
    app.get('/', function(req, res) {
        res.render('index');
    });

    app.get('/users', function(req, res) {
        db.find({}, function(err, users) {
            console.log(users);
            res.render('users', {users: users});
        });
    });
    app.post('/auth', function(req, res) {
        var login = req.body;
        console.log(login);
        db.find({
                username: login.username,
                password: login.password
            },
            function(err, users) {
            	console.log(err,users);
                if (err) res.json(err);
                else res.render('users');
            })
    });
    app.post('/addUsers', function(req, res) {
        var user = req.body;
        var newUser = new db({
            username: user.username,
            password: user.password,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email
        });
        console.info(newUser);
        db.find({ username: user.username }, function(err, users) {
            var chkUser = users.length;
            if (chkUser == 0) {
                newUser.save(function(err, docs) {
                    if (err) res.json(err);
                    else res.json(docs);
                });
            } else {
                console.error('Duplicate Username');
            }
        });
    });
}
