// routes/mail.route.js
import express from "express";
import { sendEMail } from "../controller/mail.controller.js";
const router = express.Router();

router.post("/sendemail", sendEMail);

export default router;
