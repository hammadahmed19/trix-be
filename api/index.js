import express from 'express';  // Import express to handle routes
import cors from 'cors';        // Import CORS for handling cross-origin requests
import connectDB from '../config/db.js'; // Your DB connection logic
import presaleRoutes from '../src/routes/presale.routes.js'; // Import presale routes
import queryRoutes from '../src/routes/query.routes.js';    // Import query routes

const app = express();

// Middleware
app.use(cors());           // Allow cross-origin requests
app.use(express.json());   // Parse incoming JSON requests

// DB Connection
// connectDB();

// Routes
app.use('/api/presale', presaleRoutes);  // Presale routes (e.g. /api/presale)
app.use('/api/queries', queryRoutes);    // Query routes (e.g. /api/queries)

// Health check route
app.get('/', (req, res) => {
  res.json({ status: 'Presale backend running 🚀' });  // Simple health check response
});

// Export the app for Vercel to use
export default app;
