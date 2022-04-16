const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FeedbackSchema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: 'User' },
  rating: { type: Number, default: 0},
  message: String,
  created: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Feedback', FeedbackSchema);
