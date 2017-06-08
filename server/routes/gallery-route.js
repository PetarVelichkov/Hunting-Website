const express = require('express');
const router = express.Router();
const controllers = require('../controllers');

router.get('/gallery', controllers.gallery.gallery);

module.exports = router;