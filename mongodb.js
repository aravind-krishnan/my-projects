var mongoclient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/mydb";


//to imsert one document
/*
mongoclient.connect(url,function(err,db){
	if(err) throw err;
	var myobj={name:"company inc",address:"highway 37"};
	db.collection("customers").insertOne(myobj,function(err,res){
		if(err) throw err;
		console.log("document insertion success");
		db.close();
	});
});
*/


//to insert multiple documents
/*
mongoclient.connect(url,function(err,db){
	if(err) throw err;
	var myobj=[
	{"name":"aravind","town":"ernakulam","residence":"iti layout"},
	{"name":"farhan","town":"banglore","residence":"shantinagar"},
	{"name":"rithik","town":"ernakulam","residence":"gcda ground"} ];
	
	db.collection("customers").insertMany(myobj,function(err,res){
	if(err) throw err;
	console.log("document insertion success");
	db.close();
	});
});
*/

//to read one document
/*mongoclient.connect(url,function(err,db){
	if(err) throw err;
		db.collection("customers").findOne({},function(err,result){
	if(err) throw err;
	console.log(result);
	db.close();
	});
});*/



	mongoclient.connect(url, function(err, db) {
  if (err) throw err;
  db.collection("customers").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});