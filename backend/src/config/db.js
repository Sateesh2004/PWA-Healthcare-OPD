// db.js
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // Replace <username>, <password>, <cluster-url>, and <db-name>
    const conn = await mongoose.connect(
      "mongodb+srv://kumarsateesh838_db_user:mNUmxVjYQnaRZOTy@cluster0.wcpv9xd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
