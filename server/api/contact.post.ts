import { defineEventHandler, readBody } from "h3";
import nodemailer from "nodemailer";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  // Validate the input (optional)
  if (!body.name || !body.email || !body.message) {
    throw new Error("Missing required fields");
  }

  // Use environment variables
  const config = useRuntimeConfig();
  const sendgridApiKey = config.sendgridApiKey;

  // Create a Nodemailer transporter using SendGrid
  const transporter = nodemailer.createTransport({
    host: "smtp.sendgrid.net",
    port: 465,
    auth: {
      user: "apikey",
      pass: sendgridApiKey,
    },
  });

  // Send the email
  await transporter.sendMail({
    from: "atefalvi@gmail.com",
    to: "atefalvi@gmail.com",
    subject: "New Contact Form Submission [Portfolio Site]",
    text: `
      Name: ${body.name}
      Email: ${body.email}
      Message: ${body.message}
    `,
  });

  return { success: true };
});
