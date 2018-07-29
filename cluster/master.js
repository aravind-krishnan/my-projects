var cp =require('child_process');
var net = require('net');

var tcp = net.createServer();
tcp.listen(3000,function(){
	for(var i=0;i<require('os').cpus().length;i++){
	var worker = cp.fork('child.js');
	worker.send(i,tcp.handle);
	}
	tcp.close();
});