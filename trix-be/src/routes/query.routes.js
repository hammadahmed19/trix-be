import express from "express";
import Query from "../models/Query.js";

const queryRouter = express.Router();

queryRouter.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    await Query.create({ name, email, message });
    return res.status(201).json({ message: "Query submitted successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
});

export default queryRouter;
