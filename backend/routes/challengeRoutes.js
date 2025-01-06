const express = require("express");
const router = express.Router();
const { createChallenge, getChallenges, getChallengeById, updateChallengeProgress, deleteChallenge } = require("../controllers/challengeController");
const { protect } = require("../middleware/authMiddleware");

router.post('/createChallenge', protect, createChallenge);

router.get('/getChallenges', getChallenges);

router.route("/:id/progress").put(updateChallengeProgress);

router.get('/:id', getChallengeById);

router.delete('/deleteChallenge/:id', protect, deleteChallenge);

module.exports = router;
