const express = require('express');
const router = express.Router();
const controllers = require('../controllers');

/* GET home page. */
router.get('/', controllers.home.index);

module.exports = router;
