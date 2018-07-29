var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/mydb";
/*npm install mongodb@2.2.33 --save    (---->for db.collection is not a function)
*/
app.post('/callme',function(req,res){
	
	MongoClient.connect(url, function(err, db) {
	  if (err) throw err;
	  var myobj = { name: "Company Inc", address: "Highway 37" };
	  db.collection("customers").insertOne(myobj, function(err, res) {
		if (err) throw err;
		console.log("1 document inserted");
		db.close();
	  });
	});

}

/*
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});



MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.createCollection("customers", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});



MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var myobj = { name: "Company Inc", address: "Highway 37" };
  db.collection("customers").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});





MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var myobj = [

   {"Name":"Santosh","Town":"Bhopal","Residence":"BTM layout"},
   {"Name":"Shubashish","Town":"Rourkela","Residence":"Sony Signal"},
   {"Name":"Vibhash","Town":"Mujaffarpur","Residence":"Kormangala"},
   {"Name":"Ranjana","Town":"Bangalore","Residence":"Mysore"},
   {"Name":"Ayush","Town":"Patna","Residence":"Hebbal"},
   {"Name":"Priyanka","Town":"Bhopal","Residence":"BTM"}

   ];
  db.collection("customers").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});



MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.collection("customers").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result.name);
    db.close();
  });
});


	MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.collection("customers").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});


Return the fields "name" and "address" of all documents in the customers collection:
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.collection("customers").find({}, { _id: false, name: true, address: true }).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});



MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var myquery = { address: 'Mountain 21' };
  db.collection("customers").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    db.close();
  });
});


MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var myquery = { address: /^O/ };
  db.collection("customers").deleteMany(myquery, function(err, obj) {
    if (err) throw err;
    console.log(obj.result.n + " document(s) deleted");
    db.close();
  });
});


MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var myquery = { address: "Valley 345" };
  var newvalues = { name: "Mickey", address: "Canyon 123" };
  db.collection("customers").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    db.close();
  });
});


Update all documents where the name starts with the letter "S"
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var myquery = { address: /^S/ };
  var newvalues = {$set: {name: "Minnie"} };
  db.collection("customers").updateMany(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log(res.result.nModified + " document(s) updated");
    db.close();
  });
});


MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.collection("customers").find().limit(5).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});

Delete the "customers" table:

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.collection("customers").drop(function(err, delOK) {
    if (err) throw err;
    if (delOK) console.log("Collection deleted");
    db.close();
  });
});



//get unique record using node.js
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.collection('movie', function(err, collection) {
          collection.distinct('name',function(err, item) {
          console.log("item:" + JSON.stringify(item));

          db.close();
     });
    });
});

//Insert unique record
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
   db.collection('books').ensureIndex({"name":1},{unique:true},function(error,result){
  if(error){
    console.log("error");
    }
  console.log(result);
});
});


*/