const mongoose = require('mongoose');

let methodsSchema = mongoose.Schema({
    content: String,
    category: String
});

let Methods = mongoose.model('Methods', methodsSchema);

module.exports = Methods;