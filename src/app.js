const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Rate limiting
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100
  })
);

// Routes
app.use("/api/presale", require("./routes/presale.routes"));
app.use("/api/queries", require("./routes/query.routes"));

// Health check
app.get("/", (req, res) => {
  res.send("Presale backend running");
});

module.exports = app;
