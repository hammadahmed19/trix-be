import connectDB from "../config/db.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "../models/User.js"; // your Mongoose model

dotenv.config();
await connectDB(); // connect once per function call

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { email } = req.body;
      if (!email) return res.status(400).json({ error: "Email required" });

      const user = new User({ email });
      await user.save();
      return res.status(201).json({ message: "Email saved successfully" });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
