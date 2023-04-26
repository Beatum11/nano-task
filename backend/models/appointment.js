const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    user_id: String,
    doctor_id: String,
    slot: Date
});

module.exports = new mongoose.model('appointments', appointmentSchema);