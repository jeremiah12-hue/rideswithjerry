const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: String,
  username: String,
  email: String,
  country: String,
  city: String,
  contact: String,
  psw: String
});

module.exports = mongoose.model('User', userSchema);