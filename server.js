// Imports
const cron = require("node-cron");
const express = require("express");

// Make app use express
app = express();

// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// In the future we would use this with a .env file
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

// sending texts at periodic intervals
// # 1. Entry: Minute when the process will be started [0-60]
// # 2. Entry: Hour when the process will be started [0-23]
// # 3. Entry: Day of the month when the process will be started [1-28/29/30/31]
// # 4. Entry: Month of the year when the process will be started [1-12]
// # 5. Entry: Weekday when the process will be started [0-6] [0 is Sunday]
// #
// # all x min = */x
cron.schedule("0 12 * * 6", function() {
  console.log("---------------------");
  console.log("Running Cron Job");
  client.messages
    .create({
      // What the text sends
      body: "Automated Text!",
      // Twillio number
      from: "+12282025806",
      // Picture url that is sent
      mediaUrl: ["https://demo.twilio.com/owl.png"],
      // List of receivers
      to: "+13529893703"
    })
    // Basically just to confirm it works
    .then(message => console.log(message.sid));
});

var PORT = process.env.PORT || 5000;
console.log("PORT being used", PORT);
app.listen(PORT);
