var fs = require('fs');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

/*var content = fs.readFileSync('book.json');
var jsondata=JSON.parse(content);*/

var urlencodeparser=bodyParser.urlencoded({ extended : false });

app.get('/searchbook/:name',urlencodeparser,function(req,res){
var data = req.params.name;
console.log("webdata: "+data);

var cont=fs.readFileSync('input.txt');
console.log("name: "+cont);
if(data==cont)
{ res.json({"message":"names are the same"});}
else { res.json({"message":"names are not same"});}
});


var server = app.listen(8089,'0.0.0.0',function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log("example app listening at http://%s:%s",host,port);
});