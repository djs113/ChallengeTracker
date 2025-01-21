const express = require("express");
const router = express.Router();
const { createChallenge, getChallenges, getChallengeById, updateChallengeProgress, deleteChallenge, joinChallenge, getAvailableChallenges, getCompletedChallenges } = require("../controllers/challengeController");
const { protect } = require("../middleware/authMiddleware");

router.post('/createChallenge', protect, createChallenge);

router.post('/joinChallenge/:challengeId', protect, joinChallenge);

router.get('/getChallenges', getChallenges);

router.get('/getAvailableChallenges', getAvailableChallenges);

router.get('/getCompletedChallenges', getCompletedChallenges);

router.route("/:id/progress").put(updateChallengeProgress);

router.get('/:id', getChallengeById);

router.delete('/deleteChallenge/:id', protect, deleteChallenge);

module.exports = router;
