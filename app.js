var pi = require('./modules')
// console.log(pi(["m", "2"]));

console.log(pi.new_name)

console.log(pi.new_function(1));
console.log(pi.adder(2,3));


//core modules

// var event = require('events');

// //simple event emitter
// var emitter = new event.EventEmitter();

// emitter.on('new_event', (mssg)=>{
//   console.log(mssg);
// });

// emitter.emit('new_event', 'the is my first core module');

//complex with event emitter

var events = require('events');
var util = require('util');



//create the users



var Person = function(name){
  this.name = name;
}

var mathias = new Person('mathias');
var lizzy = new Person('lizzy');
var james = new Person('james');

var people = [mathias, lizzy, james];

util.inherits(Person, events.EventEmitter);

people.forEach((member)=>{
    member.on('speak', (mssg)=>{
        console.log(member.name + ' said ' + mssg);
    })
})

mathias.emit('speak', 'i am mathias');
lizzy.emit('speak', 'i am lizzy');


//custom comment section with complex core modules

// var user = function(username){
//   this.username = username;
// }



// var mathias = new user('mathias');
// var james = new user('james');
// //comment generator:
// util.inherits(user, events.EventEmitter);

// var users = [mathias, james];


// users.forEach((unit)=>{
//     unit.on('comment', (mssg)=>{
//       console.log("@"+  unit.username + "-: retweeted: " + mssg);
//     });
// });
// mathias.emit('comment', 'Barca is the best team in the world');

//Reading and Writing using node core module

// var fs = require('fs');
// //reading
// var readData = fs.readFileSync('readfile.txt', 'utf8');
// //writing
// fs.writeFileSync('writefile.txt', readData);

//remove file


//Async Versions
//read
// fs.readFile('readfile.txt', 'utf8', function(err, data){
// //  fs.writeFile('writefile.txt', data);
// });






//Removing directory Sync
// fs.rmdirSync();
// fs.mkdirSync()  -- making directory Sync






//trying to re-create comment again














