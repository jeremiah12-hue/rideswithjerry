const mongoose = require('mongoose');
const fs = require('fs');
const ejs = require('ejs');

const newsPath = 'views/pages/news.ejs';
const news = fs.readFileSync(newsPath, 'utf8');

const newsdataSchema = new mongoose.Schema({
  filename: String,
  data: Buffer,
  description: String,
  newsId: String,
  brand: String,  
  header1: String,
  news: String,
  newsIntro: String,
  tag: String,
  date: Date
});

// Check if the model already exists
const Newsdatas = mongoose.models.Newsdatas || mongoose.model('Newsdatas', newsdataSchema);

/**
 * Fetch a single news item based on the provided newsId.
 * @param {string} newsId - The ID of the news item to fetch.
 * @returns {Promise<string|null>} - The rendered HTML of the news item or null if not found.
 */
function fetchNewsItemdatas(newsId) {
  return Newsdatas.findOne({ newsId }) // Find a single news item by newsId
    .then(newsdata => {
      if (!newsdata) {
        console.error(`No news item found with ID: ${newsId}`);
        return null; // Return null if no news item is found
      }

      const fileName = `${newsdata.filename}`; // Define your file name

      // Return the full path to the image
      const jsNewsdata = {
        imagePath: `newsImages/${newsId}.avif`,
        filename: newsdata.filename,
        description: newsdata.description,
        newsId: newsdata.newsId,
        brand: newsdata.brand,
        date: newsdata.date,
        header1: newsdata.header1,
        news: newsdata.news, 
        newsIntro: newsdata.newsIntro,
        tag: newsdata.tag
      };

      const newstemplate = ejs.compile(news, {
        filename: newsPath           
      });

      const newsHtml = newstemplate({
        jsNewsdata
      });

      return newsHtml;
    })
    .catch(err => {
      console.error(`Error fetching news data: ${err}`);
      return null;
    });
}

// Export the function to be used in your routes
module.exports = { fetchNewsItemdatas, Newsdatas };