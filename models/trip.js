const mongoose = require('mongoose');
// Optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const tripSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  location: {
    type: String
  },
  startDate: {
    type: String
  },
  endDate: {
    type: String
  },
  budget:  {
    type: Number
  },
  expenses: {
    type: Number
  },
  privacy: {
    type: Boolean,
    default: false
  },
  stops: [{type: Schema.Types.ObjectId, ref: 'Destination'}],
  user: {
    type: Schema.Types.ObjectId, 
    ref: 'User', 
    required: true
  },
}, {
  timestamps: true
});

module.exports = mongoose.model('Trip', tripSchema);