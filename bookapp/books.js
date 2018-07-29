var fs = require('fs');

//var exports = module.exports = {};
var express = require('express');
var app = express.Router();
var bodyParser = require('body-parser');

var urlencodeparser=bodyParser.urlencoded({ extended : false });

console.log("export success");
app.post('/insertbook',urlencodeparser,function(req,res){
var bname = req.body.name;
var author =req.body.author;
var price = req.body.price;
var genre = req.body.genre;
var pubctn= req.body.publication;
var bookdetails= bname+" "+author+" "+price+" "+genre+" "+pubctn;


fs.writeFile('input.txt',bookdetails,function(err){
if(err){
return console.error(err);}
});
 

res.json({"message":"written book information intoo file"});
});
var bd = fs.readFileSync('input.txt');
console.log("book details: "+bd);

module.exports = app;