const mongoose = require('mongoose');

// load the schema definition so "trips" is registered
require('../models/trips');

const Trip = mongoose.model('trips');

// GET /api/trips  → all trips
const tripsList = async (req, res) => {
  try {
    const trips = await Trip.find({});
    res.status(200).json(trips);
  } catch (err) {
    console.error('Error retrieving trips:', err);
    res.status(500).json({ message: 'Error retrieving trips' });
  }
};

// GET /api/trips/:tripCode  → one trip
const tripsFindByCode = async (req, res) => {
  try {
    const trip = await Trip.findOne({ code: req.params.tripCode });
    if (!trip) {
      return res.status(404).json({ message: 'Trip not found' });
    }
    res.status(200).json(trip);
  } catch (err) {
    console.error('Error retrieving trip:', err);
    res.status(500).json({ message: 'Error retrieving trip' });
  }
};

module.exports = {
  tripsList,
  tripsFindByCode
};