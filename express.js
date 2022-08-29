var express = require('express');

var app = express();


app.set('view engine', 'ejs');


//with ejs
app.get('/person/:name', function(req, res){

    //for ejs in html  <%= Person%>

    //for ejs in js ----- res.render('profile', {Person : req.params.name})

    //adding more data .....

    var bio = {age: 19, job: "Developer"}
    res.render('profile', {Person: req.params.name, data: bio});
})

console.log(__dirname);




app.get('/', function(req, res){
   res.send('this is the home page in ' + req.url);
});

//route parameters

//sending files

app.get('/home' , function(req, res){
   res.sendFile(__dirname + '/pipes.js')
})
//simply template engines... 
app.get('/profile/:id' , function(req, res){
   res.send('You requested to see a profile with the id of ' + req.params.id);
})

//Templating Engines


app.listen(3001);