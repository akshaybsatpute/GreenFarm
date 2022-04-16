const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: 'User' },
  name: String,
  email: { type: String, unique: true, lowercase: true },
  message: String,
  created: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Contact', ContactSchema);
