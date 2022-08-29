//pipes allow you to automatically write buffers to thier desitnations

var fs = require('fs');

// var Reader = fs.createReadStream(__dirname + '/readstreamfile.txt');

var Writer = fs.createWriteStream(__dirname + '/writestreamfile.txt');

//Reader.pipe(Writer);

//create server for reading from file buffer and writing unto server...

var http = require('http');


var server = http.createServer(function(req, res){
  //for fetching data form a plain-text file....
    
   // res.writeHead(200, {'Content-Type':'text/plain'});
   // var Reader = fs.createReadStream(__dirname + '/readstreamfile.txt');

    //write filestream unto server....
   // Reader.pipe(res);
    // res.end('hey message');   

    //for fetching data from a JSON file

  
});


var jsonServer = http.createServer(function(req, res){
    // console.log('a request was made to ' + req.url);
    // res.writeHead(200, {'Content-Type' : 'application/json'});
    // var obj = {
    //     name: 'Mathias',
    //     job: 'Developer',
    //     age:19
    // }

    // res.end(JSON.stringify(obj));

    if(req.url === '/' || req.url === '/home'){
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end('this is the home page');
    }else if(req.url === '/contact'){
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end('this is the contact page on ' + req.url);
    }else 
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    var new_reader = fs.createReadStream(__dirname + '/readstreamfile.txt');
    new_reader.pipe(res);

    
});


jsonServer.listen(3000, 'localhost');
console.log('server is running')





