var http = require('http')
var fs = require('fs')
http.createServer(function(req,res){
    // res.write("hello Goood boy\n")
    // res.end()
    // fs.open('myfile1.txt','w',function(err){
    //     if(err) throw err;
    //     console.log("File created Successfully")
    // })
    // fs.appendFile('myfile1.txt','Sample data',function(err){
    //     if(err)throw err;
    //     console.log('file created sucessfully');
    // })

    // fs.appendFile('Notes.txt','This ia node program',function(err){
    //     if(err) throw err;
    //     console.log('File has been created without any error');
    // })

    // data="Hello My country name is India"
    // fs.appendFile('myfile1.txt',data,function(err){
    //     if(err) throw err;
    //     console.log('File created Successfully')
    // })

    fs.readFile('myfile1.txt',function(err,data){
        res.write(data)
        return res.end();
    })
}).listen(1000);