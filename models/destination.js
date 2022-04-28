const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destSchema = new Schema({
  imgUrl: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  openingHrs: {
    type: String,
    required: true
  },
  phoneNum: {
    type: String,
    required: true
  },
  website: {
    type: String
  },
  budget:  {
    type: Number,
    required: true
  },
  expenses: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Destination', destSchema);