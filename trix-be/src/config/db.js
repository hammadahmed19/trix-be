import mongoose from "mongoose";

const connectDB = async () => {
  
  const uri = "mongodb+srv://root_db_user:Trix%40123@cluster0.4ciisw8.mongodb.net/presale?retryWrites=true&w=majority"
;

  if (!uri) {
    throw new Error("❌ MONGO_URI is missing");
  }

  try {
    await mongoose.connect(uri);
    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;
