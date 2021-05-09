const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "oscarmugambi@gmail.com",
    subject: "Thanks for joining in!",
    text: `Welcome to the app, ${name}. Let me know how you get along with the app`,
  });
};
const sendCancellationEmail = (email, name) => {
  sgMail
    .send({
      to: email,
      from: "oscarmugambi@gmail.com",
      subject: "Sad to see yo go!",
      text: `Goodbye, ${name}. I hope to see you back soon`,
    })
    .then(() => {
      console.log("email sent");
    });
};

module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail,
};
