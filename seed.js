require('dotenv').config();
require('./config/database');

const Trip = require('./models/trip');
const Destination = require('./models/destination');

const data = require('./data');

const p1 = Trip.deleteMany({});
const p2 = Destination.deleteMany({});

Promise.all([p1, p2])
  // results will be an array of the resolved
  // values of the two promises in order
  .then(function(results) {
    return Destination.create(data.destinations);
  })
  .then(function(destinations) {
    return Trip.create(data.trips);
  })
