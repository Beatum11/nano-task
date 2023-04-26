require('dotenv').config();
const url = process.env.DATABASE_URL;
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);


const start = async (app) => {
    await mongoose.connect(url);
    app.listen('8000', () => {console.log('App is listening')});
}

module.exports = start;