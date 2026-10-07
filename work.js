var http = require('http');
var fs = require('fs')
http.createServer(function(req,res){
    res.write('This is an assignment for nodejs')
    res.write('I posses the good skills ')
    res.end()
    fs.writeFile('notes.txt','w',function(err){
        if(err)throw err;
        console.log("Created notes file sucessfully")
        
    })
    fs.appendFile('notes.txt','\nThis is the next line of the notes file',function(err){
        if(err)throw err;
        console.log("\nThe file appended sucessfully!")
    })
    res.end()

    fs.readFile('notes.txt',function(err){
        if(err)throw err;
        res.write('notes.txt')
        return res.end();

    })

    fs.rename('notes.txt','NewNotes.txt',function(err){
        if(err)throw err;
        console.log('The renaming is sucessful');
    })
    res.end()

    fs.unlink('Newnotes.txt',function(err){
        if(err)throw err;
        console.log("the file deleted sucessfully")
    })
    
}).listen(2000);