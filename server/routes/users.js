const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/users', function(req, res, next) {
  res.send('Users route');
});

module.exports = router;
