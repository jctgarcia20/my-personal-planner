const mongoose = require('mongoose');
// Optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const destSchema = new Schema({
  imgUrl: {
    type: String,
    // required: true
  },
  name: {
    type: String,
    // required: true
  },
  location: {
    type: String,
    // required: true
  },
  openingHrs: {
    type: String,
    // required: true
  },
  phoneNum: {
    type: Number,
    // required: true
  },
  website: {
    type: String
  },
  budget:  {
    type: Number,
    // required: true
  },
  expenses: {
    type: Number,
    // required: true
  },
  user: {
    type: Schema.Types.ObjectId, 
    ref: 'User', 
    // required: true
  }
}, {
  timestamps: true
});


const tripSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  location: {
    type: String
  },
  startDate: {
    type: Date
  },
  endDate: {
    type: Date
  },
  budget:  {
    type: Number
  },
  expenses: {
    type: Number,
    default: 0
  },
  privacy: {
    type: Boolean,
    default: false
  },
  stops: [destSchema],
  user: {
    type: Schema.Types.ObjectId, 
    ref: 'User', 
    required: true
  },
}, {
  timestamps: true
});

module.exports = mongoose.model('Trip', tripSchema);