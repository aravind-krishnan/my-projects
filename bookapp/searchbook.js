var fs = require('fs');
var express = require('express');
var app = express.Router();
var bodyParser = require('body-parser');
var urlencodeparser=bodyParser.urlencoded({ extended : false });


app.post('/deletebook',urlencodeparser,function(req,res){

var rbid = req.body.id;
var data=JSON.parse(fs.readFileSync('./book.json','utf8'));
for(var i=0;i<data.length;i++){
	if(data[i].bid==rbid){
		data.splice[i,1];
	}
}
var cont=JSON.stringify(data)
fs.writeFile('./book.json',cont,function(err){
if(err){
return console.error(err);}
});
res.json({"message":"book deleted succesfullly"});
});


module.exports = app;