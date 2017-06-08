const mongoose = require('mongoose');

module.exports = {
    homeCalendar: (req, res) => {
        "use strict";
        res.render('calendar/calendar')
    },
    small: (req, res) => {
        "use strict";
        res.render('calendar/small')
    },
    feathered: (req, res) => {
        "use strict";
        res.render('calendar/feathered')
    },
    predator: (req, res) => {
        "use strict";
        res.render('calendar/predator')
    }
};