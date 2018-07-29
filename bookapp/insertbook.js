var fs = require('fs');
var express = require('express');
var app = express.Router();
var bodyParser = require('body-parser');
var urlencodeparser=bodyParser.urlencoded({ extended : false });


app.post('/insertbook',urlencodeparser,function(req,res){
var ibid = req.body.id;
var ibname = req.body.name;
var iauthor =req.body.author;
var iprice = req.body.price;
var data=JSON.parse(fs.readFileSync('./book.json','utf8'));	
var i=data.length;	
        data[i].bid=ibid;
		data[i].bname=ibname;
		data[i].author=iauthor;
		data[i].price=iprice;
var contents=JSON.stringify(data)
fs.writeFile('./book.json',contents,function(err){
if(err){
return console.error(err);}
}); 
res.json({"message":"written book information intoo file"});
});


module.exports = app;