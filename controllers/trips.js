const Trip = require('../models/trip');
const Dest = require('../models/destination');

module.exports = {
  create,
  new: newTrip,
  addToTrip,
  delete: deleteTrip
};

function create(req, res) {
  Trip.findById(req.params.id, function(err, movie) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar =  req.user.avatar;
    dest.trip.push(req.body);
    dest.save(function (err) {
      res.redirect(`/destinations/${req.params.id}`);
    });
  });
}

function newTrip(req, res) {
  const trip = req.params.id;
  res.render('itineraries/new', { title: 'Create New Trip', trip });
}

function addToTrip(req, res) {
  Trip.findById(req.params.id, function(err, movie) {
    trip.stops.push(req.body.performerId);
    trip.save(function(err) {
      res.redirect(`/trips/${trip._id}`);
    });
  });
}

function deleteTrip(req, res) {
  Dest.findOne({'trip._id': req.params.id, 'trip.user': req.user._id}).then(function(dest) {
    if (!dest) return res.redirect('/trips/dest._id/new');
    dest.trip.remove(req.params.id);
    dest.save().then(function() {
      res.redirect(`/destinations/${req.params.id}`);
    });
  });
}