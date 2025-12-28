import express from "express";
import cors from "cors";
import connectDB from "../config/db.js"; // Your DB connection logic

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// DB Connection
connectDB();

console.log("🚀 Database connected");

app.get("/", (req, res) => {
  res.send("Presale backend running 🚀");
});
// Routes
app.use("/api/presale", require("./routes/presale.routes"));
app.use("/api/queries", require("./routes/query.routes"));

// Health check route


// Export the app for serverless function on Vercel
export default app; // We are now exporting the app instead of using app.listen()
