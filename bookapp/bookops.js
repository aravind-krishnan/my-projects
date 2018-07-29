var exp = require('express');
var app = exp();

var router = exp.Router ();

var ibook = require('./insertbook.js');
var dbook = require('./deletebook.js');
var ubook = require('./updatebook.js')

app.use('/ibook',ibook);
app.use('/dbook',dbook);
app.use('/ubook',ubook);






var server = app.listen(8089,'0.0.0.0',function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log("example app listening at http://%s:%s",host,port);
});