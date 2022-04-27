require('dotenv').config();
require('./config/database');

const Trip = require('./models/trip');
const Destination = require('./models/destination');

const data = require('./data');

const p1 = Trip.deleteMany({});
const p2 = Destination.deleteMany({});

Promise.all([p1, p2])

  