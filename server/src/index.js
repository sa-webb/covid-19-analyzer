const express = require('express')
const bodyParser = require('body-parser')
const { init } = require('./db')
const routes = require('./routes')
const cors = require('cors');
const logger = require('morgan');

const app = express()
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});
app.use(bodyParser.json())
app.use(routes)
app.use(cors());
app.use(logger('dev'));

init().then(() => {
  console.log('starting server on port 5000')
  app.listen(5000)
})