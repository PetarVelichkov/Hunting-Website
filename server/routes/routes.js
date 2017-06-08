let homeRoute = require('./home-route');
let articleRoute = require('./article-route');
let usersRoute = require('./users-route');
let categoryRoute = require('./category-route');
let calendarRoute = require('./calendar-routes');

module.exports = (app) => {
    app.use('/', homeRoute);
    app.use('/', articleRoute);
    app.use('/', usersRoute);
    app.use('/', categoryRoute);
    app.use('/', calendarRoute);

    app.all('*', (req, res) => {
        res.status(404);
        res.send('Not Found');
        res.end()
    })
};