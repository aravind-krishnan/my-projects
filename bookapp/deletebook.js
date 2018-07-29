var fs = require('fs');
var express = require('express');
var app = express.Router();
var bodyParser = require('body-parser');
var urlencodeparser=bodyParser.urlencoded({ extended : false });


app.post('/deletebook',urlencodeparser,function(req,res){

var rbid = req.body.id;
console.log("id: "+rbid)
var data=JSON.parse(fs.readFileSync('./book.json','utf8'));
console.log("read: "+data);
var str=data.toString;
console.log("data: "+str);
for(var i=0;i<data.length;i++){
	console.log("id: "+data[rbid-1].bid+" i="+i+" value:"+data[i].toString);
	if(data[i].bid==rbid){
		data.splice(i,1);
		//data[rbid]=null;
		//console.log("deleted: "+data[rbid-1].bid);
		//data.splice(rbid-1,1);
	}
}


console.log("written: "+data);
var contents=JSON.stringify(data)
fs.writeFile('book.json',contents,function(err){
if(err){
return console.error(err);}
});
res.json({"message":"book deleted succesfullly"});
});


module.exports = app;