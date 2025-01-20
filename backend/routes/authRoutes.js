const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getUserProfile, verifyToken } = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');

// Register route
router.post('/register', registerUser);

// Login route
router.post('/login', loginUser);

// Get user profile route (protected)
router.get('/profile', protect, getUserProfile);

// Verify token
router.get('/verifyToken', verifyToken);

module.exports = router;