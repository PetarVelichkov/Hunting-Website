const express = require('express');
const router = express.Router();
const controllers = require('../controllers');

/* GET calendar page. */
router.get('/calendar/1', controllers.calendar.homeCalendar);
router.get('/calendar/2', controllers.calendar.small);
router.get('/calendar/3', controllers.calendar.feathered);
router.get('/calendar/4', controllers.calendar.predator);

module.exports = router;