const mongoose = require('mongoose');

module.exports = {
    index: (req, res) => {
        "use strict";
        res.render('home/index')
    }
};