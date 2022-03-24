const config = require("../config/config");
const nodemailer = require("nodemailer");


const contactUsMail = (body) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      //enable lesssecureapps from account.gmail
      //enter your credentials here
      user: "info@innerinsight.io",
      pass: "1nn3r1sight.!0",
    },
  });

  //list for who the mail will come to =>
  const recipent = "tehseenjawed1@gmail.com";
  const sendingMail = "Inner Insights";

  const messageForVendor =
    "<style>tr,td {border:solid 3px #000000} </style> <h2 style='text-align:center;'>Contact Details</h2><div><table style='border: 1px solid  #000000; width: 100%;align-item:center '" +
    "</td></tr><tr><td>Name:</td><td>" +
    body.username +
    "</td></tr><tr><td>Email:</td><td>" +
    body.email +
    "</td></tr><tr><td>Contact Details:</td><td>" +
    body.phone +
    "</td></tr><tr><td>Company</td><td>" +
    body.company +
    "</td></tr></table><br><br>Customers Query:<br>" +
    body.message +
    "</div>";

  const mailOptionClient = {
    from: sendingMail,
    to: recipent,
    subject: "Another user created",
    html: messageForVendor,
  };

  transporter.sendMail(mailOptionClient, function (err, data) {
    if (err) {
      console.log(err);
    } else {
      return { message: "email sent" };
    }
    return "mail Sent";
  });

};

module.exports = { contactUsMail };
