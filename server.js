const express = require('express');
const app = express();

// process.env.port used for heroku deployment, or localhost:5000 for dev
const port = process.env.PORT || 5000;

app.get('/', (req, res) => res.send('Hello'));

app.listen(port, () => console.log(`Listening on server ${port}`));