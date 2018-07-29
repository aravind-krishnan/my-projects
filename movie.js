var movie = [{"ddlj":"hindi"},
			 {"avatar":"english"}, 
			 {"sultan":"hindi"}, 
			 {"narasimham":"malayalam"}
			];
			
			
var express = require('express');
var app = express();
app.get('/movielist',function(req,res){
res.json(movie);
});

var server = app.listen(8087,'0.0.0.0',function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log("example app listening at http://%s:%s",host,port);
});