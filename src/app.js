const express = require('express');
const app = express();
const requireDir = require('require-dir');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const routes = requireDir('./routes');
for (const route in routes) {
  app.use(`/${route}`, routes[route]);
}

module.exports = app;
