const mongoose = require('mongoose');
const encryption = require('../utilities/encryption');

let requiredValidationMessage = '{PATH} is required';

let userSchema = mongoose.Schema({
    username: { type: String, required: requiredValidationMessage, unique: true },
    hashedPassword: String,
    salt: String,
    roles: [String]
});

userSchema.method({
    authenticate: function (password) {
        let inputHashedPassword = encryption.generateHashedPassword(this.salt, password);
        return inputHashedPassword === this.hashedPassword;
    }
});

let User = mongoose.model('User', userSchema);

module.exports.seedAdminUser = () => {
    "use strict";
    User.find({})
        .then(users => {
            let salt = encryption.generateSalt();
            let hashedPassword = encryption.generateHashedPassword(salt, 'admin12345');

            User.create({
                username: 'admin',
                hashedPassword: hashedPassword,
                salt: salt,
                roles: ['Admin']
            })
        })
};
