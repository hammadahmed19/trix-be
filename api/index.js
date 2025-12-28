import express from "express";
import cors from "cors";
import connectDB from "../config/db.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// DB connection
connectDB();

// Health check route
app.get("/", (req, res) => {
  res.json({ status: "Backend running on Vercel 🚀" });
});

// Export the app for Vercel serverless functions
export default app;
