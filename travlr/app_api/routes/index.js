const express = require('express');
const router = express.Router();

// Controllers
const tripsController = require('../controllers/trips');

// Middleware
const auth = require('../middleware/auth');

// User authentication routes
const usersRouter = require('./users');
router.use('/users', usersRouter);

// PUBLIC trip routes
router.get('/trips', tripsController.tripsList);
router.get('/trips/:tripCode', tripsController.tripsFindByCode);

// NOTE:
// Admin-only POST/PUT/DELETE routes are intentionally omitted
// because corresponding controller functions do not exist yet.
// Authentication is demonstrated via /users/login and JWT usage.

module.exports = router;