import connectDB from "../config/db.js";
import dotenv from "dotenv";
import Query from "../models/Query.js";

dotenv.config();
await connectDB();

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { name, email, message } = req.body;
      if (!name || !email || !message) {
        return res.status(400).json({ error: "All fields required" });
      }

      const query = new Query({ name, email, message });
      await query.save();
      return res.status(201).json({ message: "Query saved successfully" });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
