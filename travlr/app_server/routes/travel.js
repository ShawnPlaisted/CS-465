// app_server/routes/travel.js
const express = require('express');
const router = express.Router();
const travelerCtrl = require('../controllers/travelerController');

router.get('/', travelerCtrl.getTravelList);

module.exports = router;
