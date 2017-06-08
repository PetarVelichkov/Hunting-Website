const mongoose = require('mongoose');
const Methods = mongoose.model('Methods');

module.exports = {
    show: (req, res) => {
        "use strict";

        Methods.find({}).then(methods => {
            res.render('methods/methods', {methods: methods})
        })
    },
    showMethods: (req, res) => {
        "use strict";
        let id = req.params.id;

        Methods.find({}).then(methods => {
            Methods.findById(id).then(method => {
                res.render('methods/view', {methods: methods, method: method})
            })
        })
    }
};