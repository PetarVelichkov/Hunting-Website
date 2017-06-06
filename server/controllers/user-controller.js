const User = require('mongoose').model('User');
const encryption = require('../utilities/encryption');

module.exports = {
    loginGet: (req, res) => {
        "use strict";
        res.render('user/login')
    },
    authenticate:(req, res) => {
    let loginArgs = req.body;
    User.findOne({username: loginArgs.username}).then(user => {
        if (!user ||!user.authenticate(loginArgs.password)) {
            let errorMsg = 'Username or password is invalid!';
            loginArgs.error = errorMsg;
            res.render('user/login', loginArgs);
            return;
        }

        req.logIn(user, (err) => {
            if (err) {
                res.render('/user/login', {error: err.message});
                return;
            }

            let returnUrl = '/';
            if(req.session.returnUrl) {
                returnUrl = req.session.returnUrl;
                delete req.session.returnUrl;
            }

            res.redirect(returnUrl);
        })
    })
},

    logout: (req, res) => {
        "use strict";
        req.logOut();
        res.redirect('/');
    }
};