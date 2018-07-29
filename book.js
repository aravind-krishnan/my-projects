var fs = require('fs');
var express = require('express');
var app = express();


var content = fs.readFileSync('book.json');
var jsondata=JSON.parse(content);


app.get('/booklist',function(req,res){
res.json(jsondata);
});

var server = app.listen(8088,'0.0.0.0',function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log("example app listening at http://%s:%s",host,port);
});