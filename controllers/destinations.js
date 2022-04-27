const Dest = require('../models/destination');

module.exports = {
  index,
  show,
  new: newDest,
  create
};

function index(req, res) {
  Dest.find({}, function(err, dest) {
    res.render('destinations/index', { title: 'All Destination', dest });
  });
}

function show(req, res) {
  Dest.findById(req.params.id, function (err, dest) {
    res.render('destinations/show', { title: '', dest });
  });
}

function newDest(req, res) {
  res.render('destinations/new', { title: 'Add New Destination', dest });
}

function create(req, res) {
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  let dest = new Dest(req.body);
  dest.save(function(err) {
    if (err) return res.redirect('/destinations/new');
    console.log(dest);
    res.redirect(`/destinations/${dest._id}`);
  });
}