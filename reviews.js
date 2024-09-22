function fetchReviews() {
  return Review.find()
    .then(reviews => {
      const jsReviewData = reviews.map(review => ({
        username: review.username,
        thoughts: review.thoughts,
        date: review.date
      }));

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

module.exports = { fetchReviews };