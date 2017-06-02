const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

module.exports = (config, app) => {
    "use strict";
    app.set('view engine', 'hbs');
    app.set('views', config.rootPath + 'server/views');

    app.use(cookieParser());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    //TODO install session and passport

    // uncomment after placing your favicon in /public
    //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

    app.use(express.static(config.rootPath + 'public'));
};