const express = require("express");
const router = express.Router();
const { createChallenge, getChallenges } = require("../controllers/challengeController");
const { protect } = require("../middleware/authMiddleware");

router.post('/createChallenge', protect, createChallenge);

router.get('/getChallenges', getChallenges);

module.exports = router;
