const express = require('express');
const router = express.Router();
const destCtrl = require('../controllers/destinations');

router.get('/trips/:id/destinations/new', destCtrl.new);
router.post('/trips/:id/destinations', destCtrl.create);

module.exports = router;