const mongoose = require('mongoose');
// Optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const tripSchema = new Schema({
  // _id: ,
  // userFavoriting: ,
  location: {
    type: String
  },
  budget:  {
    type: Number
  },
  expenses: {
    type: Number
  },
  Public: {
    type: Boolean,
    default: false
  },
}, {
  timestamps: true
});

module.exports = mongoose.model('Trip', tripSchema);