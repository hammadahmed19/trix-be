import express from "express";
import cors from "cors";
import connectDB from "../config/db.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// DB
connectDB();



// Health check
app.get("/", (req, res) => {
  res.json({ status: "Backend running on Vercel 🚀" });
});

// ❌ DO NOT listen
export default app;
