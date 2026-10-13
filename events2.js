var fs = require('fs');
var rs = fs.createReadStream('./myfile.txt');

rs.on("data",function(data){
    console.log(data.toString());
});