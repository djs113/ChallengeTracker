const mongoose = require("mongoose");

const ChallengeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  goal: { type: String, required: true },
  duration: { type: Number, required: true },
  progress: { type: Number, required: true },
  difficultyLevel: { type: String, enum: ["Easy", "Medium", "Hard"], required: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Challenge", ChallengeSchema);
