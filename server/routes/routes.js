const controllers = require('../controllers');
let homeRoute = require('./home-route');
let usersRoute = require('./users-routes');

module.exports = (app) => {
    app.use('/', homeRoute);
    app.use('/', usersRoute);

    app.all('*', (req, res) => {
        res.status(404);
        res.send('Not Found');
        res.end()
    })
};