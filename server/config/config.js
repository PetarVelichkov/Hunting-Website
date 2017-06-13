const path = require('path');
let rootPath = path.normalize(path.join(__dirname, '/../../'));

module.exports = {
    development: {
        rootPath: rootPath,
        db: 'mongodb://localhost:27017/hunting-website',
        port: 1337
    },
    production: {
        rootPath: rootPath,
        db: process.env.MONGODB_ADDON_URI,
        port: process.env.port
    }
};
