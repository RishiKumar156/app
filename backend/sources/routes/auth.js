// routes/auth.js
const express = require('express');
const jwt = require('jsonwebtoken');
const { authenticateToken } = require('../middleware/auth');
require('dotenv').config();
const router = express.Router();

// Mock database for demonstration purposes
const users = [];

// Register route
router.post('/register', (req, res) => {
  // Implement user registration logic here
  const user = { username: req.body.username, password: req.body.password };
  users.push(user);
  // Generate access token
  const accessToken = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '15m' });

  res.json({ accessToken });
});

// Login route
router.post('/login', (req, res) => {
  // Implement user login logic here
  const username = req.body.username;
  const user = users.find((u) => u.username === username);

  if (!user) {
    return res.status(401).json({ message: 'Invalid username or password' });
  }

  // Generate access token
  const accessToken = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '15m' });

  res.json({ accessToken });
});

// Logout route
router.post('/logout', authenticateToken, (req, res) => {
  // Implement user logout logic here
  res.json({ message: 'Logout successful' });
});

module.exports = router;
