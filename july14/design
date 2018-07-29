//factory pttern
let person = function(firstname,lastname){

let temp={};//blank object
temp.firstname=firstname;
temp.lastname=lastname;

temp.getfullname=function(){
return this.lastname+this.firstname;
}

return temp;
}

let p1= new person("ayush","kumar");
console.log(p1.getfullname())




//constructor patterrn

let person=function(firstname,lastname){
this.firstname=firstname;
this.lastname=lastname;


this.getfullname=function(){
return this.firstname+" "+this.lastname;
}
}

let p1=new person("aravind","krishnan");
console.log(p1.getfullname());



//prototype pattern

let personprototype = function(){

}

personprototype.prototype.firstname="no name";
personprototype.prototype.lastname="no name";
personprototype.prototype.age=16;


let p1 = new personprototype();
p1.firstname="aravind";
p1.lastname="krishnan";

console.dir(p1);
console.log("age is: "+p1.age);





//concept of closure
let x=3;

let addto=function(a){
return a+x;
}

console.dir(addto);
console.log(addto(4));

//closure with function
let addto=function(a){

let add=function(b){
return a+b;

}
return add;
}

let add1= new addto(6);
console.log(add1(4));