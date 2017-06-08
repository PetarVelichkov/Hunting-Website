let homeController = require('./home-controller');
let articleController = require('./articles-controller');
let usersController = require('./user-controller');
let categoryController = require('./category-controller');
let calendarController = require('./calendar-controller');

let controllers = {
    home: homeController,
    article: articleController,
    users: usersController,
    category: categoryController,
    calendar: calendarController
};

module.exports = controllers;
