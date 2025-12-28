import mongoose from "mongoose";

const PresaleEmailSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const PresaleEmail = mongoose.model("PresaleEmail", PresaleEmailSchema);

export default PresaleEmail;
