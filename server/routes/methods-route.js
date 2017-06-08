const express = require('express');
const router = express.Router();
const controllers = require('../controllers');


router.get('/methods', controllers.methods.show);
router.get('/methods/:id', controllers.methods.showMethods);

module.exports = router;