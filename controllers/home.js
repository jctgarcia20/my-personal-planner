const Trip = require('../models/trip');

module.exports = {
  index
};

function index(req, res) {
  Trip.find({}, function(err, index) {
    res.render('index', { title: 'JGTravels', index });
  });
}