const express = require('express');
const Appointment = require('../models/appointment');
const Doctor = require('../models/doctor');

const router = express.Router();

router.post('/', async (req, res) => {

    try{
        const {user_id, doctor_id, slot} = req.body;

        const doctor = await Doctor.findById(doctor_id);
        const slotDate = new Date(slot);

        const isSlotAvailable = doctor.slots.some((availableSlot) => {
            const availableSlotDate = new Date(availableSlot);
            return availableSlotDate.getTime() === slotDate.getTime();
        });

        if(isSlotAvailable){

            const appointment = new Appointment({
                user_id: user_id,
                doctor_id: doctor_id,
                slot: slotDate
            });

            await appointment.save();
            res.sendStatus(201);
        } else {
            res.status(400).send({ error: 'Выбранное вами время занято' });
        }
    } catch(e){
        res.sendStatus(400);
    }
});












module.exports = router;