import nodemailer from "nodemailer";

export const mailer = async ({ name, email, subject, message }, res) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.AUTH_EMAIL,
      pass: process.env.AUTH_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.AUTH_EMAIL,
    to: "franborgiani2003@gmail.com",
    subject: `Message from ${name}: ${subject}`,
    text: `
    email: ${email}
    message: ${message}
  `,
  };

  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      res.status(500).send("Internal server error");
    } else {
      res.send("Successfully sent");
    }
  });
};
