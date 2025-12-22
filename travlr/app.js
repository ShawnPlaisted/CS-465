const express = require('express');
const path = require('path');
const logger = require('morgan');
const mongoose = require('./app_api/models/db');

// API routes
const apiRouter = require('./app_api/routes/index');

const app = express();

// ******** CORS FIX (Do not remove) ********
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// Middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve Angular Admin (frontend)
app.use(express.static(path.join(__dirname, 'admin/dist/admin')));

// API endpoint
app.use('/api', apiRouter);

// SPA fallback
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'admin/dist/admin/index.html'));
});

// Start server
const port = 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

module.exports = app;