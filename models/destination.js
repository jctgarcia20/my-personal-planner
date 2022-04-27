const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  budget:  {
    type: Number,
    required: true
  },
  expenses: {
    type: Number,
    required: true
  },
  phoneNum: {
    type: String,
    required: true
  },
  openingHrs: {
    type: String,
    required: true
  },
  photos: {
    type: String,
    required: true
  },
  website: {
    type: String
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Destination', destSchema);