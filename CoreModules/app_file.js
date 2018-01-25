var myFile = require('fs');
myFile.writeFileSync("data.txt","sruthi is a very good girl.she is 23 years old..");
console.log("reading"+myFile.readFileSync("data.txt"));
var fs = require('fs');
console.log("hii");
fs.writeFile('./fs.tmp', '1,2,3,4', function(err) {
  if (err) console.log("err" + err);
  else console.log("no err");
});