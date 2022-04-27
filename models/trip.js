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
  stops: [{type: Schema.Types.ObjectId, ref: 'Destination'}],
  budget:  {
    type: Number
  },
  expenses: {
    type: Number
  },
  public: {
    type: Boolean,
    default: false
  },
  date: {
    type: String
  },
  user: {
    type: Schema.Types.ObjectId, 
    ref: 'User', 
    required: true
  },
}, {
  timestamps: true
});

module.exports = mongoose.model('Trip', tripSchema);