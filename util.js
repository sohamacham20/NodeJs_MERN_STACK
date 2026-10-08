// util module
const ut = require("util");

const str= "I am %s and i am from %s city";
const result=ut.format(str,"Soham","Yavatmal");
console.log(result);
// Operating System
const os = require("os");
console.log(os.type());
// Platform
console.log(os.platform())
// Total memory
console.log(os.totalmem()+"bytes.");
// Display available memory
console.log(os.freemem()+" bytes.")


const path = require('path');
// Resolves the sequence of path into absolute path
console.log(path.resolve("base.js"))
// Extension of the file
console.log(path.extname("base.js"))
// Joins all given path segments into onew normalized path
console.log(path.join('home','user','docs','myfile1.txt'));

//Normalizes a path (removes unnecessary .. or .)
console.log(path.normalize('/home/user/../docs/myfile1.txt'))