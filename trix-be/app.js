import express from "express";
import cors from "cors";
import connectDB from "./src/config/db.js";
import queryRouter from "./src/routes/query.routes.js";
import presaleRouter from "./src/routes/presale.routes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
connectDB();

// Routes
app.use("/api/presale", presaleRouter);
app.use("/api/queries", queryRouter);

// Health check
app.get("/", (req, res) => {
  res.send("Presale backend running");
});

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

export default app;
