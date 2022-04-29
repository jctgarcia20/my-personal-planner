const Trip = require('../models/trip');
const Destination = require('../models/destination');

module.exports = {
  index,
  show,
  create,
  new: newTrip,
  delete: deleteTrip,
  edit: editTrip,
  update
};

function index(req, res) {
  Trip.find({}, function(err, trips) {
    res.render('trips/index', { title: 'My Trips', trips });
  });
}

function show(req, res) {
  Trip.findById(req.params.id,
    function(err, trip) {
          res.render('trips/show', { title: 'Trip Details', trip });
    });
}

function create(req, res) {
  const trip = new Trip(req.body);
  // Assign the logged in user's id
  trip.user = req.user._id;
  trip.save(function(err) {
    if (err) return res.render('trips/new');
    res.redirect(`/trips`);
  });
}

function newTrip(req, res) {
  res.render('trips/new', { title: 'Create New Trip' });
}

function deleteTrip(req, res) {
  console.log('hello');
  Trip.findOneAndDelete(
    {_id: req.params.id, user: req.user._id}, function(err) {
      res.redirect('/trips');
    }
  );
}

function editTrip(req, res) {
  console.log('string')
  Trip.findById(req.params.id, function(err, trip) {
    res.render('trips/edit', {title:'Update Trip', trip});
  });
}

function update(req, res) {
  Trip.findOneAndUpdate(
    {_id: req.params.id, user: req.user._id},
    // update object with updated properties
    req.body,
    // options object with new: true to make sure updated doc is returned
    {new: true},
    function(err, trip) {
      console.log(err);
      if (err || !trip) return res.redirect('/trips');
      res.redirect(`/trips/${trip._id}`);
    }
  );
}