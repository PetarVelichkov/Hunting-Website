const express = require('express');
const router = express.Router();
const controllers = require('../controllers');
const auth = require('../config/auth');

/* GET category create page. */
router.get('/category/create', auth.isInRole('Admin'), controllers.category.createCategoryView);
/* POST category create page. */
router.post('/category/create', controllers.category.createCategory);

router.get('/category/articles/:id', controllers.category.viewCategory);

module.exports = router;