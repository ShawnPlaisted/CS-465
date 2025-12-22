// app_server/controllers/trips.js

const trips = require('../Models/trips.json');

const tripsList = (req, res) => {
  res.render('travel', {
    title: 'Travlr Getaways - Trips',
    trips: trips
  });
};

module.exports = {
  tripsList
};