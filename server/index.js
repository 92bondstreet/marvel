require('dotenv').config();
const cors = require('cors');
const express = require('express');
const {onProxyReq} = require('./utils');
const helmet = require('helmet');
const path = require('path');
const proxy = require('http-proxy-middleware');
const {CLIENT_PATH, MARVEL_PUBLIC_API, NODE_ENV, PORT} = require('./constants');

const CLIENT_STATIC_PATH = path.join(__dirname, CLIENT_PATH, 'build');
const CLIENT_PRODUCTION_PATH = path.join(
  __dirname,
  CLIENT_PATH,
  'build/index.html'
);

const app = express();

app.use(cors());
app.use(helmet());

if (NODE_ENV === 'production') {
  app.use(express.static(CLIENT_STATIC_PATH));

  app.get('/', (req, res) => {
    res.sendFile(CLIENT_PRODUCTION_PATH);
  });
}

/**
 * We redirect all the api calls to the marvel api
 * with the right authentication
 * @type {[type]}
 */

app.use('/*', proxy({onProxyReq, 'target': `${MARVEL_PUBLIC_API}`, 'changeOrigin': true}));

app.listen(PORT);
console.log(`📡 Running on port ${PORT}`);
