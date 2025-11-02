/**
 * Simple Express server for Travlr Getaways (Module One)
 * Serves static HTML from ./public
 */
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve everything in /public as static assets
app.use(express.static(path.join(__dirname, 'public')));

// For root, send index.html from /public
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Basic health-check route for quick I/O test
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Travlr Express server running at http://localhost:${PORT}`);
});
