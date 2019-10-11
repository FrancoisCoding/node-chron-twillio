// Imports
const cron = require("node-cron");
const express = require("express");

// Make app use express
app = express();

// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// In the future we would use this with a .env file
const accountSid = "ACdf4f99235f6136c8a6e872dd97ca8ff2";
const authToken = "f30f42343827e8f75ac7e5dd1687de8e";
const client = require("twilio")(accountSid, authToken);

// sending texts at periodic intervals
cron.schedule("* * * * Friday", function() {
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
