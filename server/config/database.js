let mongoose = require('mongoose');

mongoose.Promise = global.Promise;

module.exports = (config) => {
    mongoose.connect(config.db);

    let db = mongoose.connection;

    db.once('open', err => {
        "use strict";
        if(err) {
            console.log(err);
        }
        console.log('MongoDB ready!');
    });

    db.on('error', err => console.log('Database error: ' + err));

    // require('../models/User').seedAdminUser();
    require('../models/User');
    require('../models/Article');
    require('../models/Category');
    require('../models/Gallery');
    require('../models/Methods');
};