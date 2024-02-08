// server.js
const express = require('express');
const path = require('path');
// const axios = require('axios');
const app = express();
const port = process.env.PORT || 8080;
// const YT_Channel_ID = "UCuNwM9dSfTwCdlNDJswjm2Q" // Jarle channel id



// fetch youtube videos

// fetch Facebook posts

// facebook so complicated :(

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));


app.get('/', (req, res) => {
res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
console.log(`Server is running on port ${port}`);
});