const express = require('express');
const router = express.Router();
const passport = require('passport');
const homeCtrl = require('../controllers/home');

router.get('/', homeCtrl.index);

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/auth/google', passport.authenticate(
  'google',
  {
    scope: ['profile', 'email'],
    prompt: 'select_account'
  }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/trips',
    failureRedirect: '/trips'
  }
));

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/trips');
});

module.exports = router;
