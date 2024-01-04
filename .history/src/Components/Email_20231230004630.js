// email.js

const nodemailer = require('nodemailer');

const sendEmail = async ({ email, message }) => {
  try {
    // Замените эти настройки на свои реальные данные
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'ваша_почта@gmail.com',
        pass: 'ваш_пароль',
      },
    });

    const mailOptions = {
      from: 'ваша_почта@gmail.com',
      to: 'info@roema.it',
      subject: 'Новое сообщение от пользователя',
      text: `Email: ${email}\n\nMessage: ${message}`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ', info);

    return true;
  } catch (error) {
    console.error('Error sending email: ', error);
    return false;
  }
};

module.exports = { sendEmail };
