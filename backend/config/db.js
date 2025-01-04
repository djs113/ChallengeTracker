const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // Use your MongoDB URI here. If running locally, use the default localhost URL.
    await mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/challengetracker");
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);  // Exit the process if connection fails
  }
};

module.exports = connectDB;
