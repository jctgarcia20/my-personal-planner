const express = require('express');
const router = express.Router();
const tripsCtrl = require('../controllers/trips');
const isLoggedIn = require('../config/auth');

// All routes starts with: /trips (because of the mounting in server.js)

// GET /trips
router.get('/', tripsCtrl.index);
// GET /trips/new (new functionality)
router.get('/new', tripsCtrl.new);
// GET /trips/:id (show functionality)
router.get('/:id', tripsCtrl.show);
// POST /trips (create functionality)
router.post('/', isLoggedIn, tripsCtrl.create);
// DELETE /trips (delete functionality)
router.delete('/:id', isLoggedIn, tripsCtrl.delete);

router.get('/:id/edit', isLoggedIn, tripsCtrl.edit);

router.put('/:id', isLoggedIn, tripsCtrl.update);

module.exports = router;
