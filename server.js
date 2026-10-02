var http = require('http')
http.createServer(function(res,req){
    res.write('Today is monday')
    res.write('You are the best person')
    res.write('You are the best person')
    res.end()
}).listen(5000);