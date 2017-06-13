const express = require('express');
const favicon = require('serve-favicon');
// const logger = require('morgan');
let hbs = require('hbs');


const app = express();


let env = process.env.NODE_IMPORTED || 'development';
let config = require('./server/config/config')[env];

require('./server/config/database')(config);
require('./server/config/express')(config, app);
require('./server/routes/routes')(app);
require('./server/config/passport')();
require('./server/config/handlebars')(hbs);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

app.listen(config.port);
console.log('Express ready!');

module.exports = app;
