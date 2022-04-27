var express = require('express');
var router = express.Router();
const passport = require('passport');

const key = process.env.GOOGLE_API_KEY;

router.get('/', function(req, res, next) {
  res.redirect('/trips');
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
