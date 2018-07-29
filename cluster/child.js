var express = require('express');
var app = express();
process.on('message',function(id,handle){
	
	app.get('/',function(req,res){
		console.log(process.pid+'is listening..');
		res.end(process.pid+'is listening,....');
	});
	app.listen(handle,function(){
		console.log(process.pid+'started');
	});
});
