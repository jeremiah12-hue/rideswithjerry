const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
  newsId: String,
  newsImg: String,
  newsIntro: String,
  news: String,
  date: String,
  tag: String,
  brand: String,
  header1: String
});

module.exports = mongoose.model('newsData', newsSchema);