// ===============================
// Functions
// ===============================


// ===============================
// Function Declarations
// ===============================

// Classic way to define functions.

// Syntax:
// function name() { ... }

// Hoisting:
// The entire function body is hoisted.
// It can be called before its declaration.

greet();

function greet() {
  console.log("Hello from function declaration");
}



// ===============================
// Function Expressions
// ===============================

// Functions assigned to variables.

// Only the variable declaration is hoisted,
// not the function definition.

// Calling before assignment leads to:
// - TypeError (if var)
// - ReferenceError (if let/const)

const sayHello = function () {
  console.log("Hello from function expression");
};

sayHello();



// ===============================
// Named Function Expression
// ===============================

// Useful for debugging stack traces.

const factorial = function fact(n) {
  if (n <= 1) return 1;
  return n * fact(n - 1);
};

console.log(factorial(5));



// ===============================
// Arrow Functions (ES6)
// ===============================

// Concise syntax for function expressions.

// Key traits:
// - Lexical this
// - No arguments object
// - Not constructible
// - Cannot be used with new
// - No prototype

const add = (a, b) => a + b;

console.log(add(2, 3));



// ===============================
// Immediately Invoked Function Expression (IIFE)
// ===============================

// A function that runs immediately after definition.

// Used to create a private scope.

(function () {
  let message = "IIFE executed";
  console.log(message);
})();



// ===============================
// Generator Functions
// ===============================

// Functions that can pause and resume execution.

// Defined using function*

function* myGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = myGenerator();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());



// ===============================
// Higher Order Functions (HOF)
// ===============================

// A function that:
// - Takes another function as argument
// - Returns a function

function operate(a, b, operation) {
  return operation(a, b);
}

const multiply = (x, y) => x * y;

console.log(operate(3, 4, multiply));



// ===============================
// Array Higher Order Methods
// ===============================

const numbers = [1, 2, 3, 4, 5];


// ===============================
// map()
// ===============================

// Creates a new array by transforming each element.

const doubled = numbers.map(n => n * 2);

console.log(doubled);



// ===============================
// filter()
// ===============================

// Returns a new array containing elements
// that satisfy a condition.

const evenNumbers = numbers.filter(n => n % 2 === 0);

console.log(evenNumbers);



// ===============================
// reduce()
// ===============================

// Reduces an array to a single value.

const sum = numbers.reduce((acc, curr) => acc + curr, 0);

console.log(sum);

// If initial value is not provided,
// the first element is used as the accumulator.
// This can cause bugs if the array is empty.


// ===============================
// Immutability
// ===============================

// map, filter, reduce return new arrays
// and do NOT mutate the original array.

console.log(numbers);


// forEach does not return a new array
// and is typically used for side effects.

numbers.forEach(n => console.log(n));



// ===============================
// Default Parameters (ES6)
// ===============================

function multiplyNumbers(a, b = 1) {
  return a * b;
}

console.log(multiplyNumbers(5));
console.log(multiplyNumbers(5, 3));


// Interview note:
// Default parameters do not count
// toward the function's length property.

console.log(multiplyNumbers.length);



// ===============================
// Function Currying
// ===============================

// Transforming a function with multiple arguments
// into a sequence of single-argument functions.

// Currying works using closures.

function curryAdd(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(curryAdd(1)(2)(3));



// ===============================
// Partial Application Example
// ===============================

function multiplyBy(a) {
  return function (b) {
    return a * b;
  };
}

const double = multiplyBy(2);

console.log(double(5));



// ===============================
// Function Composition
// ===============================

// Combining functions where the output of one
// becomes the input of the next.

const compose = (f, g) => x => g(f(x));

const addTwo = x => x + 2;
const square = x => x * x;

const composedFunction = compose(addTwo, square);

console.log(composedFunction(3));