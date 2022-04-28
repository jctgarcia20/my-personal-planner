const Trip = require('../models/trip');

module.exports = {
  create,
  new: newDest
};

function create(req, res) {
  Trip.findById(req.params.id, function(err, trip) {
    // Update req.body to contain user info
    req.body.user = req.user._id;
    // Add the comment
    console.log(req.body);
    console.log('trip', trip);
    trip.stops.push(req.body);
    trip.save(function(err) {
      res.redirect(`/trips/${trip._id}`);
    });
  });
}

function newDest(req, res) {
  Trip.findById(req.params.id, function(err, trip) {
    res.render('destinations/new', { title: 'Add New Destination', trip });
  });
}
