var  cluster = require('cluster');
var http = require('http');
var numCpus = 4;


/*if(cluster.isWorker){
	console.log('i am a worker');
} else{
	console.log('i am master');
	cluster.fork();
	cluster.fork();
}*/

if(cluster.isMaster){
	for(var i=0;i<numCpus;i++){
		console.log("this is "+(i+1)+" process with pid: "+process.pid);
		cluster.fork();
	}
}
else{
		http.createServer(function(req,res){
			res.writeHead(200);
			res.end('process '+process.pid+' say hello');
		}).listen(8000);
	}
