import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  port: Number(process.env.SMTP_PORT),
  host: process.env.SMTP_HOST,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  secure: !!process.env.SMTP_SECURE,
});
