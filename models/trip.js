const mongoose = require('mongoose');
// Optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const tripSchema = new Schema({
  
});

module.exports = mongoose.model('Trip', tripSchema);