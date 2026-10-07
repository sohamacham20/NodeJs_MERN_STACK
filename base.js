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

    // fs.readFile('myfile1.txt',function(err,data){
    //     res.write(data)
    //     return res.end();
    // })

    // fs.writeFile('myfile.1.txt',"\nNew updated content is here \n",function(err){
    //     if(err) throw err;
    //     res.write('file updated sucessfully and without any error no neeed to worry');
    //     return res.end();
    // })
    // d='\nThis is the newly added data '
    // fs.appendFile('myfile1.txt',d,function(err){
    //     if (err) throw err;
    //     res.write("final updattion of the file")
    //     return res.end();
    // })

    fs.rename('myfile.1.txt','myfile2.txt',function(err){
        if (err) throw err;
        console.log("Renaminng is sucessfully");
        return res.end();
    })

    fs.unlink()
}).listen(1000);