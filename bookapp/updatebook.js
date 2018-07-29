var fs = require('fs');
var express = require('express');
var app = express.Router();
var bodyParser = require('body-parser');
var urlencodeparser=bodyParser.urlencoded({ extended : false });


app.post('/updatebook',urlencodeparser,function(req,res){

var ubid = req.body.id;
var ubname = req.body.name;
var uauthor =req.body.author;
var uprice = req.body.price;

var data=JSON.parse(fs.readFileSync('./book.json','utf8'));
console.log("read: "+data);
for(var i=0;i<data.length;i++){
	if(data[i].bid==ubid){
		data[i].bid=ubid;
		data[i].name=ubname;
		data[i].author=uauthor;
		data[i].price=uprice;
	}
}
console.log("written: "+data)
var contents=JSON.stringify(data)
fs.writeFile('book.json',contents,function(err){
if(err){
return console.error(err);}
});
res.json({"message":"book updated succesfullly"});
});


module.exports = app;