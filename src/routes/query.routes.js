const express = require("express");
const router = express.Router();
const Query = require("../models/Query");

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    await Query.create({ name, email, message });
    res.status(201).json({ message: "Query submitted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
