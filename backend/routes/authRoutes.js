const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getUserProfile } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

// Register route
router.post('/register', registerUser);

// Login route
router.post('/login', loginUser);

// Get user profile route (protected)
router.get('/profile', authMiddleware, getUserProfile);

module.exports = router;