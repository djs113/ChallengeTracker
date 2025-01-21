const jwt = require("jsonwebtoken");
const dotenv = require('dotenv');

const Challenge = require("../models/Challenge");

const getUserId = (req) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader.split(" ")[1];
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  return decoded.userId;
};

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
    const userId = getUserId(req);
    const challenges = await Challenge.find({ userId, completed: false });
    res.json({ success: true, data: challenges });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.getCompletedChallenges = async (req, res) => {
  try {
    const userId = getUserId(req);
    const challenges = await Challenge.find({ completed: true });
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

exports.getAvailableChallenges = async (req, res) => {
  const userId = getUserId(req);
  try {
    const challenges = await Challenge.find({ userId: { $ne: userId }, 
      "participants.userId": { $nin: [userId] }, 
      completed: false});
    res.json({ success: true, challenges });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

exports.joinChallenge = async (req, res) => {
  const challengeId = req.params.challengeId;
  const userId = getUserId(req); // Assuming these are passed from the frontend

  try {
    const challenge = await Challenge.findById(challengeId);

    if (!challenge) {
      return res.status(404).json({ success: false, message: "Challenge not found" });
    }

    // Check if the user is already a participant
    const isAlreadyParticipant = challenge.participants.some(
      (participant) => participant.userId === userId
    );

    if (isAlreadyParticipant) {
      return res.status(400).json({ success: false, message: "User already joined this challenge" });
    }

    // Add the user with initial progress and completed status
    challenge.participants.push({
      userId,
      progress: 0, // Start with 0 progress
      completed: false, // Not completed initially
    });

    await challenge.save();

    res.json({ success: true, message: "Joined challenge successfully", challenge });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

exports.updateChallengeProgress = async (req, res) => {
  const challenge = await Challenge.findById(req.params.id);

  if (!challenge) {
    res.status(404);
    throw new Error("Challenge not found");
  }

  if (!challenge.completed) {
    challenge.progress = challenge.progress + 1;
    await challenge.save();

    if (challenge.progress == challenge.duration) {
      challenge.completed = true;
      await challenge.save();
    } 
  } else {
      return res.status(200).json({ challenge, message: "Challenge already completed" });
  }
  // Increment progress by 1 day
  
  ;

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