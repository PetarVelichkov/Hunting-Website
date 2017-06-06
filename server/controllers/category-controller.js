const Category = require('mongoose').model('Category');
const Article = require('mongoose').model('Article');

module.exports = {
    createCategoryView: (req, res) => {
        "use strict";
        res.render('category/create')
    },
    createCategory: (req, res) => {
        "use strict";
        let categoryArgs = req.body;

        let errorMsg = '';
        if (!req.isAuthenticated()) {
            errorMsg = 'You should be logged in to make category!'
        } else if(!categoryArgs.title) {
            errorMsg = 'Invalid name'
        }

        if (errorMsg) {
            res.render('category/create', {error: errorMsg});
            return;
        }


        Category.create(categoryArgs).then(category => {
            category.save(err => {
                if (err) {
                    res.redirect('/', {error: errorMsg})
                } else {
                    res.redirect('/')
                }
            })
        })
    },
    viewCategory: (req, res) => {
        "use strict";
        let id = req.params.id;

        Category.findById(id).then(category => {
            Article.find({category: category.title}).then(articles => {
                res.render('article/category-articles', {articles: articles})
            })
        })
    }
};