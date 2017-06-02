const controllers = require('../controllers');
let homeRoute = require('./home');
let usersRoute = require('./users');

module.exports = (app) => {
    app.use('/', homeRoute);
    app.use('/', usersRoute);

    app.all('*', (req, res) => {
        res.status(404);
        res.send('Not Found');
        res.end()
    })
};