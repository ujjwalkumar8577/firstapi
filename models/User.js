const mangoose = require('mongoose');

const userSchema = new mangoose.Schema({
    username: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },
});

module.exports = mangoose.model('User', userSchema);