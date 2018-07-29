//concept of promise

let cleanroom=new Promise(function(resolve,reject){
let isclean=true;
if(isclean){
resolve("room is cleaned");
}
else{
 reject("sorry, i cant clean the room....");
}
});

let getprize=function(){
return new Promise(function(resolve,reject){
resolve("give him the prize");
});
}

let notifyme=function(){
return new Promise(function(resolve,reject){
resolve("the prize is given");
});
}

cleanroom.then(function(msg){
console.log("the msg is: "+msg);
}).then(function(msg){
	return getprize();
}).then(function(msg){
	console.log("finished: "+msg)
}).then(function(msg){
return notifyme();
}).then(function(msg){
console.log("return msg: "+msg)
}).catch((err)=>{
	 console.log("erroris :"+err);
})