const express = require("express");
const router = express.Router();
const validator = require("validator");
const PresaleEmail = require("../models/PresaleEmail");

router.post("/subscribe", async (req, res) => {
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
    res.status(201).json({ message: "Subscribed successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
