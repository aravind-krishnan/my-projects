let y=function(a,b){
console.log("a+b is :"+(a+b));
}

let x= function(a,b,callback){
callback(a,b);
}

console.log(x(4,5,y));