// # Closures

// Function along with its lexical scope bundled together to form a closure.
// More precisely we can say a **function remembers variables from its lexical(outer) scope even after that outer function has finishes executing**.


function outer(){
    let count =0;
    function inner(){
        count++;
        console.log(count)
    }
    inner();
}
let c1 = outer();
c1();
c1();
// both c1 shares the same closure or we can say memory reference of count variable

let c2 = outer();
c2();
// c2 has different memory location for count variable.


// Use cases of closures are :- 

// - Debounce/ Throttle
// - memoization
// - Data hiding - Encapsulation
// - function currying
// - setTimeout



let debounce = function( fn, delay){
    let timer;
    return function(...args){
        clearTimeout(timer);
        timer = setTimeout(()=> fn.apply(this,args),delay)
    }
}
const handleSearch=function( ){
    console.log("searching");
}

let debounceSearch = debounce(handleSearch,1000);


let throttle = function(fn,limit){
    let lastCall =0;
    return function(...args){
        const now = Date.now();
        if(now-lastCall >= limit){
            lastCall= now;
            fn.apply(this,args);
        }

    }
};


const memoise = (fn)=>{
    let cache = {};
    return function(...args){
        let key = JSON.stringify(args);
        if(key in cache){
            return cache[key];
        }
        let result = fn.apply(this,args);
        cache[key]= result ;
        return result;
    }

}
function sum(n){
    let result =0;
    for(let i=0;i<n;i++){
        result += i;

    }
    return result;
}

let efficient = memoise(sum);
console.time();
console.log(efficient(5))
console.timeEnd();




function bankAccount() {
  let balance = 0;
  return {
    deposit(amount) {
      balance += amount;
    },
    withdraw(amount) {
      
      balance -= amount;
    },
    getBalance(){
	    console.log(balance);
    }
  };
}

let c11= bankAccount();
c11.deposit(2000);
c11.withdraw(300);
console.log(c11.balance); // return undefined because data is enncapsulated from the user
c11.getBalance();



let curry = function(a){
    return function(b){
        return function(c){
            console.log(a+b+c);
        }
    }
}
curry(1)(2)(3);

for(var i=0;i<3;i++){
    setTimeout(()=>console.log(i),0)
}
// 3 3 3 as output, because var is functioned scope and the loop created only one shared variable that is i 
// setTimeout call back runs after the loop finishes by that time the value of i === 3 ;


// Key points to remember : - 

// - It always captures the current value of the variable.
// - The value like “count” stored in the lexical environment(Closure) of inner function which is kept alive in memory (heap) as long as the inner function is referenced.

// disadvantages :- can leads to **memory consumption for large objects, DOM references, Event listeners not removed