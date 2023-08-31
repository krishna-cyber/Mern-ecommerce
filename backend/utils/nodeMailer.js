/** @format */

const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
  var transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.FROM_EMAIL,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transport.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      throw {
        message: "Email could not be sent",
        statusCode: 500,
      };
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

module.exports = sendEmail;
