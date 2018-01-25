var msg = 'Hello Sruthizz World';
console.log(msg);
var obj= {name:"sru",age:23};
var exo = {v:"v"};
exo.prototype=obj;
function fi()
{
    console.log("hii");
}
setTimeout(fi,1000);
for(x in obj)
//console.log("object"+obj[x]);
obj.gender="female";
//for(x in obj)
//console.log("object"+obj[x]);
//exo.prototype.pv="female";
//obj.name = "India";
for(x in obj)
console.log("object"+obj[x]);
for(x in exo)
console.log("object"+exo[x]);
console.log("exo"+exo.name);