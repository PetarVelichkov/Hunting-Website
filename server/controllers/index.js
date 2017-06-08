let homeController = require('./home-controller');
let articleController = require('./articles-controller');
let usersController = require('./user-controller');
let categoryController = require('./category-controller');
let calendarController = require('./calendar-controller');
let galleryController = require('./gallery-controller');
let methodsController = require('./methods-controller');

let controllers = {
    home: homeController,
    article: articleController,
    users: usersController,
    category: categoryController,
    calendar: calendarController,
    gallery: galleryController,
    methods: methodsController
};

module.exports = controllers;
