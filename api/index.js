import app from "../src/app.js";  // Import your Express app
import { createRequestHandler } from "@vercel/node";  // Import Vercel's Node.js request handler

export default createRequestHandler(app);  // Export the app wrapped with Vercel handler
