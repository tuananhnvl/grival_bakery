const nodemailer = require("nodemailer");
//-----------------------------------------------------------------------------
export async function sendMail(person, otpText) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PW,
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  const mailOptions = {
    from: process.env.NODEMAILER_EMAIL,
    to: "trungthubrodard@gmail.com",
    subject: "Đơn hàng Grival",
    text: '??',
    html: `<div>${person}</div><p>Code banh${JSON.stringify(otpText)}</p>`
  };

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (err, response) => {
      if (err) {
        reject(err);
      } else {
        resolve(response);
      }
    });
  });
}