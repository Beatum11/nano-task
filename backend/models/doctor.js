const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    id: String,
    name: String,
    spec: String,
    slots: [{ type: Date}]
});

module.exports = new mongoose.model('doctors', doctorSchema);