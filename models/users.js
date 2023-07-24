const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
    profile: {
        firstName: {type: String, default: 'John'},
        lastName: {type: String, default: 'Doe'},
        age: {type: Number},
        avatar: {type: String},
        email: {type: String},
        phone: {type: String} 
    },
    email: {type: String}
});

const model = mongoose.model('user', userSchema);

module.exports = model;