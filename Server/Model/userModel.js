//import files
const Mongoose = require('mongoose');

//create user schema like structure of storing data
const userSchema = Mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    phone: {
        type: Number,
        require: true
    },
    createdOn: {
        type: Date,
        default: Date.now
    }
});

//export user model or schema
module.exports = Mongoose.model('authentication', userSchema);