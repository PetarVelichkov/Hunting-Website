const mongoose = require('mongoose');

module.exports = {
    contacts: (req, res) => {
        "use strict";
        res.render('contacts/contacts')
    }
};