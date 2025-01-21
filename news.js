const mongoose = require('mongoose');
const fs = require('fs');
const ejs = require('ejs');
const path = require('path');

const newsPath = 'views/pages/news_item.ejs';

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
  date: Date,
  createdAt: { type: Date, default: Date.now } // Add createdAt field
});

// Ensure the model is defined only once
const Newsdatas = mongoose.models.Newsdatas || mongoose.model('Newsdatas', newsdataSchema);

/**
 * Converts Buffer data to an image file.
 * @param {Buffer} bufferData - The Buffer data to be converted.
 * @param {string} destinationPath - The path where the image file will be saved.
 * @param {string} fileName - The name of the image file (with extension).
 */
function convertBufferToImage(bufferData, destinationPath, fileName) {
  const outputFilePath = path.join(destinationPath, fileName);
  
  fs.writeFile(outputFilePath, bufferData, (err) => {
    if (err) {
      console.error('Error writing image file:', err);
    } else {
      console.log('Image file saved as', outputFilePath);
    }
  });
}

function fetchNewsdatas() {
  return Newsdatas.find().sort({ createdAt: -1 }) // Sort by createdAt in descending order
    .then(newsdatas => {
      const destinationPath = './public/newsImages'; // Define your path
      // Ensure the destination directory exists
      if (!fs.existsSync(destinationPath)) {
        fs.mkdirSync(destinationPath, { recursive: true });
      }

      const jsNewsdata = newsdatas.map(newsdata => { 
        // Convert the buffer to an image file
        const exampleBuffer = newsdata.data; // This is the binary data
        const fileName = `${newsdata.newsId}.avif`; // Define your file name

        // Call the function to convert Buffer to image
        convertBufferToImage(exampleBuffer, destinationPath, fileName);

        // Return the full path to the image
        return {
          imagePath: `newsImages/${fileName}`, // This is the path to be used in the EJS template
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
      });

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

module.exports = { fetchNewsdatas, Newsdatas };