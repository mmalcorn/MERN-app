const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

const auth = require('./routes/api/auth');
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

// Connect to MongoDB
mongoose
  .connect(db, {useNewUrlParser: true})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

  app.get('/', (req, res) => res.send('Hello'));
  app.use('/api/auth', auth);
  app.use('/api/profile', profile);
  app.use('/api/posts', posts);

// process.env.port used for heroku deployment, or localhost:5000 for dev
const port = process.env.PORT || 5000;


app.listen(port, () => console.log(`Listening on server ${port}`));