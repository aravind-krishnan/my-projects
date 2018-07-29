var fs = require('fs');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

/*var content = fs.readFileSync('book.json');
var jsondata=JSON.parse(content);*/

var urlencodeparser=bodyParser.urlencoded({ extended : false });

app.post('/booklist',urlencodeparser,function(req,res){
var id = req.body.name;
var pass=req.body.email;

fs.writeFile('input.txt',id+pass,function(err){
if(err){
return console.error(err);}
});


res.json({"message":"written book information intoo file"});
});


var server = app.listen(8089,'0.0.0.0',function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log("example app listening at http://%s:%s",host,port);
});


