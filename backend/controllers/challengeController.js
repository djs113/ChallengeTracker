const jwt = require("jsonwebtoken");
const dotenv = require('dotenv');

const Challenge = require("../models/Challenge");

exports.createChallenge = async (req, res) => {
  try {
    const start = new Date(req.body.startDate);
    const end = new Date(req.body.endDate);
    const duration = (end - start) / (1000 * 60 * 60 * 24);

    const decoded = jwt.verify(req.body.userId, process.env.JWT_SECRET);
    const userId = decoded.userId;

    const challenge = await Challenge.create({ ...req.body, duration, userId });
    res.status(201).json({ success: true, data: challenge });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.getChallenges = async (req, res) => {
  try {
    const challenges = await Challenge.find();
    res.json({ success: true, data: challenges });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.getChallengeById = async (req, res) => {
   try {
    const challenge = await Challenge.findById(req.params.id);
    if (!challenge) {
      return res.status(404).json({ message: "Challenge not found" });
    }

    if (challenge.progressTracking == "Automatic") {
      const today = new Date();
      const startDate = new Date(challenge.startDate);

      const differenceInTime = today.getTime() - startDate.getTime();
      const differenceInDays = Math.trunc(differenceInTime / (1000 * 3600 * 24));

      if (differenceInDays > 0) {
        if (differenceInDays <= challenge.duration) {
          challenge.progress = differenceInDays;
          await challenge.save();
        }
      }
    }
    
    res.status(200).json(challenge);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

exports.updateChallengeProgress = async (req, res) => {
  const challenge = await Challenge.findById(req.params.id);

  if (!challenge) {
    res.status(404);
    throw new Error("Challenge not found");
  }

  // Increment progress by 1 day
  if (challenge.progress >= challenge.duration) {
    return res.status(200).json({ message: "Challenge already completed" });
  }
  challenge.progress = challenge.progress + 1;
  await challenge.save();

  res.status(200).json(challenge);
};

exports.deleteChallenge = async (req, res) => {
  const challenge = await Challenge.findByIdAndDelete(req.params.id);

  if (!challenge) {
    res.status(404);
    throw new Error("Challenge not found");
  }
  
  res.status(200).json({ message: "Challenge removed successfully" });
};