///counting operations


//sum_one
const sum_one = n =>{
    let total = 0 ; 
    for(let i = 1; i <= n ; i++){
        total += i;
    }
    return total;
}

const sum_two =  n =>{
    return(n*(n+1))/2;
}

//getting the time for each operation 
t1 = Date.now()
sum_one(250000000);
t2 = Date.now()
console.log((t2-t1)/1000)


t1 = Date.now()
sum_two(250000000);
t2 = Date.now()
console.log((t2-t1)/1000)


