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
  // Configuration du transporteur Nodemailer avec les détails SMTP
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT || '587', 10),
    secure: process.env.EMAIL_PORT === '465', // true for 465, false for other ports
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD?.replace(/ /g, ''), // Retirer les espaces du mot de passe d'application
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
    // Renvoyer une erreur plus explicite pour le débogage côté serveur
    throw new Error(`Failed to send email. Reason: ${(error as Error).message}`);
  }
}
