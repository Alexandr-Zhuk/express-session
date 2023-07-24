const mongoose = require('mongoose');
const userModel = require('./users');
const { Schema } = mongoose;

const authSchema = new Schema({
    strategy: {type: String},
    user: {type: Schema.Types.ObjectId, ref: 'user'},
    authData: {type: Schema.Types.Mixed}
});

const model = mongoose.model('auth', authSchema);

module.exports = model;