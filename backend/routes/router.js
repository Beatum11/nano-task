const express = require('express');
const appointmentsRouter = require('./appointmentsRouter');
const bodyParser = require('body-parser');

const router = express.Router();
router.use(bodyParser.urlencoded({extended: true})).use(bodyParser.json());
router.use('/appointments', appointmentsRouter);




module.exports = router;