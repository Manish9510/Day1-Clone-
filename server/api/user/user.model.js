const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    lastname: String,
    firstname: String,
});

const model = mongoose.model('User', userSchema);

module.exports = model;