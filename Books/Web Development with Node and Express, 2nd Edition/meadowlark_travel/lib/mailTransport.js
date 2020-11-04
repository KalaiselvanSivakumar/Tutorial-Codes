const nodeMailer = require('nodemailer');
const credentials = require('../config');

exports.mailTransport = nodeMailer.createTransport({
  auth: {
    pass: credentials.sendgrid.pass,
    user: credentials.sendgrid.user
  },
  host: 'smtp.sendgrid.net',
  port: 587,
});
