const mongoose = require("mongoose");

const ChallengeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  goal: { type: String, required: true },
  duration: { type: Number, required: true },
  progress: { type: Number, required: true },
  progressTracking: { type: String, enum: ["Automatic", "Manual"], required: true },
  difficultyLevel: { type: String, enum: ["Easy", "Medium", "Hard"], required: true },
  completed: { type: Boolean, required: true, default: false },
  participants: [
  {
    userId: { type: String, ref: "User" },
    progress: { type: Number, default: 0 },
    completed: { type: Boolean, default: false }
  }
],
  userId: { type: String, required: true },
});

module.exports = mongoose.model("Challenge", ChallengeSchema);
