import express from "express";
import cors from "cors";
import connectDB from "../config/db.js"; // Your DB connection logic

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// DB Connection
connectDB();

// Routes
app.use("/api/presale", require("./routes/presale.routes"));
app.use("/api/queries", require("./routes/query.routes"));

// Health check route
app.get("/", (req, res) => {
  res.send("Presale backend running 🚀");
});

// Listen on port 3000 (or any port defined in your environment)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
