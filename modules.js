

//export stuff 

//remeber to learn global objects


//reqiure and exports

var name = "mathias"
var p = function(arr){
    return 'lenght is ' + arr.length ;
}

module.exports.new_function = function(e){
      return 'this is the ' + e + ' function';
}

module.exports.adder = (a,b) => {
    return 'the addition is ' + ( a+ b) ;
}
module.exports.new_name = "john";
module.exports.name = name;



