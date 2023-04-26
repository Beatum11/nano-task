const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: String,
    name: String,
    phone: String
});

module.exports = new mongoose.model('users', userSchema);