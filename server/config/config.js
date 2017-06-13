const path = require('path');
let rootPath = path.normalize(path.join(__dirname, '/../../'));
// let MONGO_DB_CONN_STRING = 'mongodb://admin:admin@ds123662.mlab.com:23662/hunting-website';

module.exports = {
    development: {
        rootPath: rootPath,
        db: 'mongodb://admin:admin@ds123662.mlab.com:23662/hunting-website',
        port: 1337
    },
    production: {
        rootPath: rootPath,
        db: process.env.MONGO_DB_CONN_STRING,
        port: process.env.PORT
    }
};