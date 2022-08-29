//creating a server ...
var http = require('http')

//*createServer method((req, res)=>{})

var server = http.createServer(function(req ,res){
    res.writeHead(200, {'Contenet-Type': 'text/plain'});
//     //200 is the status of the header
//     //second in an content type object of value: plain text

    res.end('Hey Mathias');
    
});

server.listen(3001, 'localhost');//set port number to listen on
console.log('server in running');


//creating another server 
//....important things to note createServer() , res.writeHead(status, content-type).....res.(log_message) to user , listen to request...server.listen, 




//create another server

var request = require('http')



var oneServer = request.createServer(function(req, res){
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end('hey mathias');
})



oneServer.listen(3002, 'localhost');
console.log('server is running well')