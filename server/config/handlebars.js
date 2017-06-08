module.exports = (hbs) => {
    hbs.registerHelper('inc', (val, opt) => {
        "use strict";
        return parseInt(val) + 1;
    });
};