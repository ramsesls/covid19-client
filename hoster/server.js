const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const port = process.env.HOSTER_PORT;

async function init() {
  const app = express();

  app.use(express.static(path.join(__dirname, '../build/')));
  app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../build/index.html')));

  app.listen(port);
}

init()
  .then(() => console.info(`listening on port ${port}`))
  .catch(err => console.error('Something went wrong', err));
