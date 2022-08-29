//creating a read stream 


//use the fs core module to be able to read file
//fs allow a createReadStream() method ...... (directory_name)
//createReadStream() is an event thus allowing the use of .on

//.on('data'-event, ())

//my own

var readfile = require('fs');

var ReadStream = readfile.createReadStream(__dirname + '/readstreamfile.txt', 'utf8');

var WriteStream = readfile.createWriteStream(__dirname + '/writestreamfile.txt');

ReadStream.on('data', function(bundle){
    console.log('new buble emmited')
    WriteStream.write(bundle);
})











