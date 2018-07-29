var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');


router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var votemachine = require('./votingdetails');


// UPDATES  IN THE DATABASE
router.put('/votecast/:name',  function (req, res) {
	//console.log("i am called"+req.params.name);
	var myquery = req.params.name ;
	var result = votemachine.find({'candidatename': myquery});
	result.no_of_votes= (result.no_of_votes+1);
	console.log(result);
	console.log(result.candidatename);
	console.log(result.no_of_votes);
	
	//var newvalues = {$set: {no_of_votes: (result.no_of_votes)} };
	votemachine.findOneAndUpdate(myquery,result, {new: true}, function (err, Reservation){
        if (err) return res.status(500).send("There was a problem updating the votestand.");
        res.status(200).send(votemachine);
    });
});

// RETURNS ALL THE RESERVATION IN THE DATABASE
router.get('/currentvotedetails',function (req, res) {
	  votemachine.find({},funcstion (err,votemachine) {
        if (err) return res.status(500).send("There was a problem finding the votedetails.");
        res.status(200).send(votemachine);
   });
});



    
  



module.exports = router;