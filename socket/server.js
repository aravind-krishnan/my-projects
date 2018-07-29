var express = require('express');
	app = express();
	server = require('http').createServer(app);
	io = require('socket.io').listen(server);
	usernames=[];
	
server.listen(3000,"0.0.0.0");
console.log('server running...');

app.get('/',function(req,res){
	res.sendFile(__dirname+'/index.html');
});

io.sockets.on('connection',function(socket){
	console.log('socket connected');
	
	socket.on('new user',function(data,callback){
		console.log('got new user: '+data);
		if(usernames.indexOf(data)!=-1){
			callback(false);
		}else{
			callback(true);
			socket.username=data;
			usernames.push(socket.username);
			updateusernames();
		}
	});
	
	//update usernames
	function updateusernames(){
		io.sockets.emit('usernames',usernames);
	}
		
	//send message
	socket.on('send message',function(data){
		console.log("got message"+socket.username);
		io.sockets.emit('new message',{msg: data, user:socket.username});
		io.sockets.emit('update title',{msg: data, user:socket.username});
	});
	
	//disconnect
	socket.on('disconnect',function(data){
		if(!socket.username){
			return;
		}
		
	usernames.splice(usernames.indexOf(socket.username),1);
	updateusernames();
});
});

