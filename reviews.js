const mongoose = require('mongoose');
const fs = require('fs');
const ejs = require('ejs');

const productDescPath = 'views/pages/product_desc.ejs';

const productDesc = fs.readFileSync(productDescPath, 'utf8');

const reviewSchema = new mongoose.Schema({
  username: String,
  thoughts: String,
  date: Date
});

const Review = mongoose.model('Review', reviewSchema);

function fetchReviews() {
  return Review.find()
    .then(reviews => {
      const jsReviewData = reviews.map(review => ({
        username: review.username,
        thoughts: review.thoughts,
        date: review.date
      }));

      const productDesctemplate = ejs.compile(productDesc, { 
        filename: productDescPath           
      });

      const productDescHtml = productDesctemplate({
        jsReviewData
      });

      return productDescHtml;
    })
    .catch(err => {
      console.error(`Error fetching reviews: ${err}`);
      return null;
    });
}

module.exports = { fetchReviews, Review };