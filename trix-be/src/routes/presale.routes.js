import express from "express";
import validator from "validator";
import PresaleEmail from "../models/PresaleEmail.js";

const presaleRouter = express.Router();

presaleRouter.post("/subscribe", async (req, res) => {
  const { email } = req.body;

  if (!email || !validator.isEmail(email)) {
    return res.status(400).json({ message: "Invalid email address" });
  }

  try {
    const existing = await PresaleEmail.findOne({ email });
    if (existing) {
      return res.status(409).json({ message: "Email already subscribed" });
    }

    await PresaleEmail.create({ email });
    return res.status(201).json({ message: "Subscribed successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
});

export default presaleRouter;
