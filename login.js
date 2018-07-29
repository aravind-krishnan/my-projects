var express = require('express');
var app = express();
app.get('/login',function(req,res){
res.json({"message":"welcome to nodejs session"});
});

var server = app.listen(8085,'0.0.0.0',function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log("example app listening at http://%s:%s",host,port);
});
