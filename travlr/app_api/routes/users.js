const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const router = express.Router();

// NOTE: for this class, a hardcoded secret is acceptable
const JWT_SECRET = 'travlr_secret_key';

// Register a new admin user (mock data is acceptable)
router.post('/register', async (req, res) => {
  try {
    const user = new User({ username: req.body.username });
    await user.setPassword(req.body.password);
    await user.save();
    res.status(201).json({ message: 'User created' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Login endpoint
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user || !(await user.validatePassword(req.body.password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { id: user._id, username: user.username },
      JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;