const sgMail = require("@sendgrid/mail");
require("dotenv").config();
const { SENDGRID_API_KEY } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (data) => {
  const email = { ...data, from: "kolomoyka@gmail.com" };

  await sgMail.send(email);
  return true;
};
module.exports = sendEmail;

/*
const email = {
  to: 'cajoben930@soombo.com',
  from: 'kolomoyka@gmail.com',
  subject: 'test email',
  html: '<p><strong>Test email</strong>from localhost:3000</p>'
}

sgMail
    .send(email);
.then(()=> console.log("Email send success"))
.catch(error => console.log(error.message))
*/
