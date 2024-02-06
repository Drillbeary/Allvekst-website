// server.js
require('dotenv').config();
const express = require('express');
const path = require('path');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 8080;
const YT_Channel_ID = "UCuNwM9dSfTwCdlNDJswjm2Q" // Jarle channel id


// fetch youtube videos

app.get('/fetch-youtube-videos', async (req, res) => {
    try {
        // fetch max 3 videos, order by date, type video as snippet
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${YT_Channel_ID}&maxResults=3&order=date&type=video&key=${process.env.YOUTUBE_API_KEY_DEV}`);
      const videos = response.data.items;
      res.json(videos);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.toString() });
    }
});

// fetch Facebook posts

// facebook so complicated :(

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    });


// Serve static files from the React app
//app.use(express.static(path.join(__dirname, 'build')));

//app.get('/', (req, res) => {
//res.sendFile(path.join(__dirname, 'build', 'index.html'));
//});



