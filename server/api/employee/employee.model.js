const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    lastName: String,
    firstName: String,
});

const model = mongoose.model('Employee', employeeSchema);

module.exports = model;