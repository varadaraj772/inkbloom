import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import nodemailer from "nodemailer";

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "dailyquotes2777@gmail.com",
    pass: "dailyqq87",
  },
});

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log("Error connecting to MongoDB:", error));

app.use("/book", bookRoute);
app.use("/user", userRoute);

app.post("/sendemail", (req, res) => {
  const { name, email, message } = req.body;
  console.log("Request received:", req.body);

  const mailOptions = {
    from: email,
    to: "dailyquotes2777@gmail.com",
    subject: `Contact Form Submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return res
        .status(500)
        .json({ error: "Failed to send email", details: error.message });
    }
    console.log("Email sent:", info.response);
    res.status(200).json({ message: "Email sent successfully" });
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
