// Import necessary packages
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// Initialize environment variables
dotenv.config();

// Create an Express app
const app = express();

// Connect to MongoDB
connectDB();

// Middleware to parse JSON requests
app.use(express.json());

// API Routes
// User authentication routes (signup, login)
app.use("/api/auth", require("./routes/authRoutes"));

// Challenge management routes (create, get, update, delete challenges)
app.use("/api/challenges", require("./routes/challengeRoutes"));

// Progress tracking routes (log and get user progress)
//app.use("/api/progress", require("./routes/progressRoutes"));

// Default route for testing
app.get("/", (req, res) => {
  res.send("ChallengeTracker API is running!");
});

// Error handling middleware (to catch invalid routes)
app.use((req, res, next) => {
  res.status(404).json({ message: "Route not found" });
});

// Start the server on the specified port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
