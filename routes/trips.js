var express = require('express');
var router = express.Router();
const tripsCtrl = require('../controllers/trips');
const isLoggedIn = require('../config/auth');

// All routes starts with: /trips (because of the mounting in server.js)

// GET /trips
router.get('/', tripsCtrl.index);

module.exports = router;
