var net = require('net');

var HOST = '127.0.0.1';
var PORT = '6969';

net.createServer(function(sock){
	
	console.log('CONNECTED: '+sock.remoteAddress+' : '+sock.remotePORT);
	
	sock.on('data',function(data){
		
		console.log('DATA '+sock.remoteAddress+':'+data);
		sock.write('really i also feel it');
	});
	
	sock.on('close',function(data){
		console.log('CLOSED: '+sock.remoteAddress+':'+sock.remotePORT);
	});
}).listen(PORT,HOST);

console.log('server listening at :'+HOST+':'+PORT);
