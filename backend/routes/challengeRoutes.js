const express = require("express");
const router = express.Router();
const { createChallenge, getChallenges } = require("../controllers/challengeController");
const { protect } = require("../middleware/authMiddleware");

router.route("/").post(protect, createChallenge).get(getChallenges);

module.exports = router;
