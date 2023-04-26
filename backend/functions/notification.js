const fs = require('fs');

const sendNotification = (user, doctor, slot) => {
    const message = 
    `${new Date()} | ${user.name} у Вас назначена запись на ${slot} к ${doctor.spec}у!`;

    fs.appendFile('notifications.log', message, (err) => {
        err ? console.log(`Ошибка: ${err}`) : console.log('Отправлено!');
    });
}

module.exports = sendNotification;