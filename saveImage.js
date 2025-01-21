const { MongoClient, Binary } = require("mongodb");
const fs = require("fs");

const uri = "mongodb+srv://jeremiah2:pYQyMHsSqMhcaQby@cluster0.iuvcnx1.mongodb.net/";
const client = new MongoClient(uri);
const dbName = "test";
const collectionName = "newsdatas";

async function saveImage() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");

        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        // Read the image as binary data
        const imageBuffer = fs.readFileSync('WORKSPACE/RidesII/public/gallery/news_imgs/news_imgs/news7.avif');

        // Create a document with binary data and a timestamp
        const document = {
            filename: "image42.avif",
            data: new Binary(imageBuffer),
            description: "News Image",
            brand: "Roadkill",
            date: "November 20, 2024",
            header1: "The End of an Era: What 'Roadkill' Means for Automotive Culture",
            news: "<strong>Is Roadkill Canceled? Not Quite!</strong><br><br>The show \"Roadkill\" is ending after 13 seasons in 2025, but don’t worry—the Roadkill world is still alive and kicking! While the main series will finish with 167 episodes, there are still new episodes coming in 2025 and 2026. David Freiburger, one of the show's stars, confirms that fans have more to look forward to.<br><br>The last season of Roadkill will start on MotorTrend TV in early 2025. If you can’t wait, you can watch the full season on Discovery+ and Max right now. Plus, there are some never-before-seen episodes of \"Roadkill Garage\" that will air in 2026 on the same platforms.<br><br>Even though the TV show is wrapping up, the Roadkill brand will keep going strong. Events like Roadkill Nights in Detroit and the MotorTrend TV channel will still be around.<br><br><strong>A Brief History</strong><br><br>Roadkill has roots in HOT ROD and MotorTrend magazines, which started back in 1948. As the internet grew, HOT ROD’s storytelling and the creativity of David Freiburger and Mike Finnegan led to the creation of Roadkill on YouTube. The show quickly became popular for its fun and unscripted style, attracting millions of viewers.<br><br>Roadkill's success also led to a magazine and other spin-off shows like \"Roadkill Garage.\"<br><br><strong>What’s Next?</strong><br><br>With many fans and the rise of streaming services, Roadkill and other MotorTrend shows caught the attention of bigger companies. Discovery took a stake in what became the MotorTrend Group, and in 2022, it merged with Warner Bros, bringing all MotorTrend shows under a large entertainment company.<br><br>Even though some shows are ending, there’s still plenty to enjoy! Look out for new episodes in 2025 and 2026, and you can still see your favorite cars and builders at Roadkill Nights in 2025. MotorTrend Group is also working on new content for HOTROD.com and exploring fresh ideas for YouTube.<br><br>So, stay tuned! There’s a lot more coming from MotorTrend TV, with new episodes and seasons on the way.",
            newsIntro: "Is the End of 'Roadkill' Really the End? Exploring Future Possibilities",
            tag: "Automotive Report",
            newsId: "news-news-7",
            createdAt: new Date() // Add a timestamp field
        };

        // Insert the document into the collection
        const result = await collection.insertOne(document);
        console.log("Image saved with ID:", result.insertedId);
    } catch (err) {
        console.error(err);
    } finally {
        await client.close();
    }
}

saveImage();