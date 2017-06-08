const express = require('express');
const router = express.Router();
const controllers = require('../controllers');

router.get('/contacts', controllers.contacts.contacts);

module.exports = router;