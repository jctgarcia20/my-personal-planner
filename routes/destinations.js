const express = require('express');
const router = express.Router();
const destCtrl = require('../controllers/destinations');

router.get('/', destCtrl.index);
router.get('/new', destCtrl.new);
router.post('/', destCtrl.create);
router.get('/:id', destCtrl.show);

module.exports = router;