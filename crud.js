require('dotenv').config();
require('./config/database');

const Trip = require('./models/trip');
const Destination = require('./models/destination');

let trips;

Trip.find({}, function(err, movieDocs) {
  trips = tripDocs;
});