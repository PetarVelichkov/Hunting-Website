const express = require('express');
const router = express.Router();
const controllers = require('../controllers');

/* GET user login page. */
router.get('/user/login',controllers.users.loginGet);

router.post('/user/authenticate', controllers.users.authenticate);

router.get('/user/logout', controllers.users.logout);

module.exports = router;
