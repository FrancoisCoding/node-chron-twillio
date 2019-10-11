// Imports
const cron = require("node-cron");
const express = require("express");
const nodemailer = require("nodemailer");

// Make app use express
app = express();

// create mail transporter
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "francoisisaiaht64@gmail.com",
    pass: "whatever your password is"
  }
});

// sending emails at periodic intervals
cron.schedule("* * * * Friday", function() {
  console.log("---------------------");
  console.log("Running Cron Job");
  let mailOptions = {
    from: "francoisisaiaht64@gmail.com",
    to: "francoisisaiaht@yahoo.com",
    subject: `Not a GDPR update ;)`,
    text: `Hi there, this email was automatically sent by us`
  };
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      throw error;
    } else {
      console.log("Email successfully sent!");
    }
  });
});

var PORT = process.env.PORT || 5000;
console.log("PORT being used", PORT);
app.listen(PORT);
