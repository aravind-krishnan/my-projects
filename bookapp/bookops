var exp = require('express');
var app = exp();

var router = exp.Router ();

var book = require('./books.js');

app.use('/book',book);







var server = app.listen(8089,'0.0.0.0',function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log("example app listening at http://%s:%s",host,port);
});