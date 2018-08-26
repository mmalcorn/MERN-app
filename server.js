const express = require('express');
const mongoose = require('mongoose');

const app = express();
// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

// process.env.port used for heroku deployment, or localhost:5000 for dev
const port = process.env.PORT || 5000;

app.get('/', (req, res) => res.send('Hello'));

app.listen(port, () => console.log(`Listening on server ${port}`));