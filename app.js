const webpush = require('web-push');
const fs = require('fs');

const vapidKeys = JSON.stringify(webpush.generateVAPIDKeys());

fs.writeFileSync(`${__dirname}/VAPID-keys.json`, vapidKeys, 'utf8');