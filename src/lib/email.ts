'use server';

import nodemailer from 'nodemailer';

interface EmailOptions {
  to: string | string[];
  from: string;
  subject: string;
  text: string;
  html: string;
}

export async function sendEmail({ to, from, subject, text, html }: EmailOptions) {
  // IMPORTANT: You must configure your email provider here.
  // This example uses Gmail with environment variables.
  // You should create an "App Password" for your Gmail account.
  // See: https://support.google.com/accounts/answer/185833
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER, // e.g., 'contact.croissancedigitale@gmail.com'
      pass: process.env.GMAIL_APP_PASSWORD, // Your Gmail App Password
    },
  });

  const mailOptions = {
    from: `"Croissance Digitale" <${from}>`,
    to: Array.isArray(to) ? to.join(', ') : to,
    subject: subject,
    text: text,
    html: html,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
    return info;
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email.');
  }
}
