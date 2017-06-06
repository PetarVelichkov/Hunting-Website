const Article = require('mongoose').model('Article');
const mongoose = require('mongoose');
const Category = mongoose.model('Category');

module.exports = {
    createGet: (req, res) => {
        "use strict";
        Category.find({}).then(categories => {
            res.render('article/create', {categories: categories})
        })
    },
    createPost: (req, res) => {
        "use strict";
        let articleArgs = req.body;

        let errorMsg = '';
        if (!req.isAuthenticated()) {
            errorMsg = 'You should be logged in to make articles!'
        } else if (!articleArgs.title) {
            errorMsg = 'Invalid title!';
        } else if (!articleArgs.content1){
            errorMsg = 'Invalid content!';
        } else if (!articleArgs.content2){
            errorMsg = 'Invalid content!';
        } else if (!articleArgs.content3){
            errorMsg = 'Invalid content!';
        }

        if (errorMsg) {
            res.render('article/create', {error: errorMsg});
            return;
        }

        articleArgs.image1 = 'images/' + req.files[0].filename;
        articleArgs.image2 = 'images/' + req.files[1].filename;
        articleArgs.image3 = 'images/' + req.files[2].filename;

        Article.create(articleArgs).then(article => {
            article.save(err => {
                if (err) {
                    res.redirect('/', {error: errorMsg})
                } else {
                    res.redirect('/')
                }
            })
        })
    },
    details: (req, res) => {
        "use strict";
        let id = req.params.id;

        Article.findById(id).then(article => {
            res.render('article/details', article)
        })
    }
};