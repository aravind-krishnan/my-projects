var mongoose = require('mongoose');  
var voteSchema = new mongoose.Schema({  
  
    candidatename: String,
    email: String,
    phone: String,
	no_of_votes: 0
});
mongoose.model('votemachine', voteSchema);

module.exports = mongoose.model('votemachine');