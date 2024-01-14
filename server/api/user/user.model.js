const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    lastName: String,
    firstName: String,
});

const model = mongoose.model('User', userSchema);

module.exports = model;