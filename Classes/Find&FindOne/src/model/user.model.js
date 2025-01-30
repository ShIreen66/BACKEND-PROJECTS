// const mongoose = require('mongoose')

// const userSchema = new mongoose.Schema({
//     email: {
//         type: String
//     },
//     username: {
//         type: String
//     },
//     password: {
//         type: String
//     }
// })

// const userModel = mongoose.model('user', userSchema)


const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String
    },
    username: {
        type: String
    },
    password: {
        type: String
    },
    bio: {
        type: String
    }
});

const userModel = mongoose.model('user', userSchema);

module.exports = userModel; //  Export userModel
