const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const multer = require('multer');
const Category = require('mongoose').model('Category');


module.exports = (config, app) => {
    "use strict";
    app.set('view engine', 'hbs');
    app.set('views', config.rootPath + 'server/views');

    app.use(cookieParser());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(session({
        secret: 's3cr3t5tr1ng',
        resave: true,
        saveUninitialized: true
    }));
    app.use(passport.initialize());
    app.use(passport.session());

    app.use((req, res, next) => {
        if (req.user) {
            res.locals.currentUser = req.user
        }

        next()
    });

   Category.find({}).then(categories => {
       app.locals.categories = categories
   });
    // uncomment after placing your favicon in /public
    //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

    app.use(express.static(config.rootPath + 'public'));
};