const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destSchema = new Schema({
  imgUrl: {
    type: String,
  },
  name: {
    type: String,
  },
  location: {
    type: String,
  },
  openingHrs: {
    type: String,
  },
  phoneNum: {
    type: Number,
  },
  website: {
    type: String
  },
  budget:  {
    type: Number,
  },
  expenses: {
    type: Number,
  },
  user: {
    type: Schema.Types.ObjectId, 
    ref: 'User', 
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Destination', destSchema);