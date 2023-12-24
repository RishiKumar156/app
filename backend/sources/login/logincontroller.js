const express = require('express');
const { authenticateToken } = require('../middleware/auth');
const loginrouter = express.Router();

loginrouter.get('/login', authenticateToken, (req, res) => {
  res.send('Hello from Express!');
});

loginrouter.get('/signup', (req, res) => {
  res.send('Hello from Express!');
});

module.exports = loginrouter;
