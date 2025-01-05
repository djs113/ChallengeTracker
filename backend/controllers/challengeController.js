const Challenge = require("../models/Challenge");

exports.createChallenge = async (req, res) => {
  try {
    const start = new Date(req.body.startDate);
    const end = new Date(req.body.endDate);
    const duration = (end - start) / (1000 * 60 * 60 * 24);

    const challenge = await Challenge.create({ ...req.body, duration }); //createdBy: req.user.id });
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
