const cron = require('node-cron');
const Doctor = require('../models/doctor');
const User = require('../models/user');
const Appointment = require('../models/appointment');
const notification = require('./notification');

function checkNotifications() {
  cron.schedule('* * * * *', async () => {

    const currentTime = new Date();

    const dayBefore = new Date(currentTime.getTime() - 24 * 60 * 60 * 1000);
    const twoHoursBefore = new Date(currentTime.getTime() - 2 * 60 * 60 * 1000);

    const allAppointments = await Appointment.find();
    const appointmentsToNotify = allAppointments.filter(appointment => {
      const slotTime = appointment.slot.getTime();
      return slotTime === dayBefore.getTime() || slotTime === twoHoursBefore.getTime();
    });

    for (const appointment of appointmentsToNotify) {
      const user = await User.findById(appointment.user_id);
      const doctor = await Doctor.findById(appointment.doctor_id);


      if (appointment.slot.getTime() === dayBefore.getTime()) {
        notification(user, doctor, appointment.slot);
      } else if (appointment.slot.getTime() === twoHoursBefore.getTime()) {
        notification(user, doctor, appointment.slot);
    }
  }
});
}

module.exports = checkNotifications;