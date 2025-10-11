import dns from 'node:dns';
// Force Node.js to use Google/Cloudflare DNS to fix querySrv ECONNREFUSED
dns.setServers(['8.8.8.8', '1.1.1.1']); 

import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("❌ MongoDB connection error", error);
    process.exit(1);
  }
};

export default connectDB;
