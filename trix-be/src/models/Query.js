import mongoose from "mongoose";

const QuerySchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, lowercase: true, trim: true },
  message: { type: String, required: true, trim: true },
  createdAt: { type: Date, default: Date.now },
});

const Query = mongoose.model("Query", QuerySchema);

export default Query;
