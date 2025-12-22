// app_server/controllers/travelerController.js

// demo data
const trips = [
  { code: 'BOS-NYC', title: 'Boston to New York Weekend', duration: 3, price: 249, isFeatured: true, tags: ['city break', 'train'] },
  { code: 'ME-ACAD', title: 'Acadia National Park Escape', duration: 5, price: 799, isFeatured: false, tags: ['hiking', 'nature'] },
  { code: 'FL-MCO', title: 'Orlando Theme Parks', duration: 4, price: 999, isFeatured: true, tags: ['family', 'parks'] }
];

const getHome = (req, res) => {
  res.render('index', {
    layout: 'layouts/main',
    title: 'Travlr | Home',
    hero: {
      heading: 'Welcome to Travlr',
      subheading: 'Curated getaways aligned to your preferences'
    }
  });
};

const getTravelList = (req, res) => {
  res.render('travel', {
    layout: 'layouts/main',
    title: 'Travlr | Travel',
    trips,
    hasTrips: trips && trips.length > 0
  });
};

module.exports = { getHome, getTravelList };
