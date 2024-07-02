// controller/mail.controller.js
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "dailyquotes2777@gmail.com",
    pass: "dailyqq87",
  },
});

export const sendEMail = (req, res) => {
  const { name, email, message } = req.body;
  console.log(req.body); // Debugging line

  const mailOptions = {
    from: email,
    to: "dailyquotes2777@gmail.com",
    subject: `Contact Form Submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res
        .status(500)
        .json({ error: "Failed to send email from controller" });
    }
    res.status(200).json({ message: "Email sent successfully" });
  });
};
