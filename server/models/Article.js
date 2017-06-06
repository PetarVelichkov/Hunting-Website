const mongoose = require('mongoose');

let articleSchema = mongoose.Schema({
    title: {type: String, required: true},
    content1: {type: String, required: true},
    content2: {type: String, required: true},
    content3: {type: String, required: true},
    image1: {type: String, required: true},
    image2: {type: String, required: true},
    image3: {type: String, required: true},
    category: { type: String, required: true }
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;