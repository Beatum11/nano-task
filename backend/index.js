const express = require('express');
const start = require('./functions/start');
const router = require('./routes/router');

const app = express();
app.use('/api', router);

start(app);