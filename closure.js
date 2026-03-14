// ===============================
// Closures
// ===============================

// A closure is a function bundled together with its lexical scope.

// More precisely:
// A function remembers variables from its outer (lexical) scope
// even after the outer function has finished executing.


// ===============================
// Basic Closure Example
// ===============================

function outer() {
    let count = 0;
  
    function inner() {
      count++;
      console.log(count);
    }
  
    return inner;
  }
  
  let c1 = outer();
  
  c1();
  c1();
  
  // Both calls share the same closure (same memory reference of count)
  
  let c2 = outer();
  
  c2();
  
  // c2 has a different memory location for count
  
  
  
  // ===============================
  // Use Cases of Closures
  // ===============================
  
  // - Debounce
  // - Throttle
  // - Memoization
  // - Data hiding (Encapsulation)
  // - Function currying
  // - setTimeout
  
  
  
  // ===============================
  // Debounce
  // ===============================
  
  // Debounce delays execution until a pause in calls occurs
  
  let debounce = function (fn, delay) {
    let timer;
  
    return function (...args) {
      clearTimeout(timer);
  
      timer = setTimeout(() => {
        fn.apply(this, args);
      }, delay);
    };
  };
  
  const handleSearch = function () {
    console.log("searching...");
  };
  
  let debounceSearch = debounce(handleSearch, 1000);
  
  
  
  // ===============================
  // Throttle
  // ===============================
  
  // Throttle limits execution to once every specified time
  
  let throttle = function (fn, limit) {
    let lastCall = 0;
  
    return function (...args) {
      const now = Date.now();
  
      if (now - lastCall >= limit) {
        lastCall = now;
        fn.apply(this, args);
      }
    };
  };
  
  
  
  // ===============================
  // Memoization
  // ===============================
  
  // Memoization caches function results
  // so repeated calls with same arguments return cached values
  
  const memoise = (fn) => {
    let cache = {};
  
    return function (...args) {
      let key = JSON.stringify(args);
  
      if (key in cache) {
        return cache[key];
      }
  
      let result = fn.apply(this, args);
      cache[key] = result;
  
      return result;
    };
  };
  
  function sum(n) {
    let result = 0;
  
    for (let i = 0; i < n; i++) {
      result += i;
    }
  
    return result;
  }
  
  let efficient = memoise(sum);
  
  console.time("first call");
  console.log(efficient(5));
  console.timeEnd("first call");
  
  console.time("second call");
  console.log(efficient(5));
  console.timeEnd("second call");
  
  
  
  // ===============================
  // Data Hiding / Encapsulation
  // ===============================
  
  // Closures allow private variables
  
  function bankAccount() {
    let balance = 0;
  
    return {
      deposit(amount) {
        balance += amount;
      },
  
      withdraw(amount) {
        balance -= amount;
      },
  
      getBalance() {
        console.log(balance);
      }
    };
  }
  
  let account = bankAccount();
  
  account.deposit(2000);
  account.withdraw(300);
  
  console.log(account.balance);
  
  // undefined because balance is private
  
  account.getBalance();
  
  
  
  // ===============================
  // Function Currying
  // ===============================
  
  let curry = function (a) {
    return function (b) {
      return function (c) {
        console.log(a + b + c);
      };
    };
  };
  
  curry(1)(2)(3);
  
  
  
  // ===============================
  // setTimeout + Closure Example
  // ===============================
  
  for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 0);
  }
  
  // Output:
  // 3
  // 3
  // 3
  
  // Reason:
  // var is function scoped
  // Only one shared variable "i" exists
  // setTimeout runs after the loop completes
  // By that time i = 3
  
  
  
  // ===============================
  // Key Points
  // ===============================
  
  // - Closures capture variables from outer scope
  // - Variables are stored in the lexical environment
  // - The closure keeps them alive in memory
  // - They remain until the function reference exists
  
  
  
  // ===============================
  // Disadvantages
  // ===============================
  
  // - Can increase memory usage
  // - Large objects may remain in memory
  // - DOM references can cause memory leaks
  // - Event listeners must be properly removed