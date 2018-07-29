var express = require('express');
var app = express();
var db = require('./voting');
var bodyParser = require('body-parser');
var cors = require('cors');

app.use(cors());

global.__root   = __dirname + '/'; 

app.get('/api', function (req, res) {
  res.status(200).send('API works.');
});
0
var votingController = require(__root + 'votingcontroller');
app.use('/api/vote', votingController);


module.exports = app;