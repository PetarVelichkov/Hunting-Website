let homeRoute = require('./home-route');
let articleRoute = require('./article-route');
let usersRoute = require('./users-route');
let categoryRoute = require('./category-route');
let calendarRoute = require('./calendar-routes');
let galleryRoute = require('./gallery-route');
let methodsRoute = require('./methods-route');
let contactsRoute = require('./contact-route');

module.exports = (app) => {
    app.use('/', homeRoute);
    app.use('/', articleRoute);
    app.use('/', usersRoute);
    app.use('/', categoryRoute);
    app.use('/', calendarRoute);
    app.use('/', galleryRoute);
    app.use('/', methodsRoute);
    app.use('/', contactsRoute);

    app.all('*', (req, res) => {
        res.status(404);
        res.send('Not Found');
        res.end()
    })
};