const express = require('express');
const rateLimit = require('express-rate-limit');
const nodemailer = require('nodemailer');

const PORT = process.env.PORT || 5000;
const app = express();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'factcheckedemail@gmail.com',
    pass: process.env.EMAIL_PASSWORD
  }
});

const limiter = rateLimit({
  windowMs: 24 * 60 * 60 * 1000,
  max: 100,
  message: 'Rate limit has been exceeded',
  headers: 'true'
});

app.use(express.json());

app.post('api/email',  limiter, (req, res) => {
  const mailOptions = {
    from: 'factcheckedemail@gmail.com',
    to: process.env.RECEIVING_EMAIL,
    subject: 'A new Fact Checked Media client wants to reach out!',
    text: `
    CLIENT EMAIL: ${req.body.email}

    ${req.body.text}
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.json(error);
    } else {
      res.json('Email sent: ' + info.response);
    }
  });
});


app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
