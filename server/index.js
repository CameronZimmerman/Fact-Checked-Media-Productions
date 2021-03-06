const express = require('express');
const rateLimit = require('express-rate-limit');
const nodemailer = require('nodemailer');
const cors = require('cors');

const PORT = process.env.PORT || 5000;
const app = express();
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'factcheckedmediaemail@gmail.com',
    pass: process.env.EMAIL_PASSWORD
  }
});

const corsOptions = {
  origin: 'http://localhost:7891',
  optionsSuccessStatus: 200
};

const limiter = rateLimit({
  windowMs: 24 * 60 * 60 * 1000,
  max: 100,
  message: 'Rate limit has been exceeded',
  headers: 'true'
});

app.use(cors(corsOptions));

app.use(express.json({
  type: ['application/json', 'text/plain']
}));

app.post('/api/email', limiter, (req, res) => {
  console.log('test', req.body);
  const mailOptions = {
    from: 'factcheckedemail@gmail.com',
    to: process.env.RECEIVING_EMAIL,
    subject: 'A new Fact Checked Media client wants to reach out!',
    text: `
    CLIENT EMAIL: ${req.body.email}

    ${req.body.message}
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if(error) {
      console.log(error);
      res.json({ error });
    } else {
      console.log('sent');
      res.json({ response: 'Email sent: ' + info.response });
    }
  });
});


app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
