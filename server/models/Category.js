const mongoose = require('mongoose');

let categorySchema = mongoose.Schema({
    title: {type: String, required: true}
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;