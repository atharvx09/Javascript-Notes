// ===============================
// Variables and Hoisting
// ===============================

// Hoisting is a JavaScript behavior where variable and function
// declarations are moved to the top of their scope during
// the creation phase of execution.

// Note:
// Only declarations are hoisted, not initializations.


// ===============================
// var Hoisting
// ===============================

// When using var:
// - The variable is hoisted
// - It is initialized with undefined

console.log(a); // undefined

var a = 10;

console.log(a); // 10



// ===============================
// let / const Hoisting
// ===============================

// let and const are also hoisted,
// but they are NOT initialized immediately.

// They stay in the Temporal Dead Zone (TDZ)
// from the start of the block until the line
// where they are declared.

// Accessing them inside TDZ causes a ReferenceError.


// console.log(b); // ReferenceError

let b = 20;


// console.log(c); // ReferenceError

const c = 30;



// ===============================
// Temporal Dead Zone (TDZ)
// ===============================

// TDZ is the time between:
// entering the scope and the actual declaration.

{
  // console.log(x); // TDZ → ReferenceError

  let x = 5;

  console.log(x);
}



// ===============================
// Function Hoisting
// ===============================

// Function Declarations are fully hoisted.
// The entire function definition is available
// before the line where it appears.

greet();

function greet() {
  console.log("Hello from function declaration");
}



// ===============================
// Function Expressions
// ===============================

// When functions are assigned to variables,
// only the variable declaration is hoisted,
// not the function definition.


// Using var

// sayHi(); // TypeError: sayHi is not a function

var sayHi = function () {
  console.log("Hello");
};

sayHi();



// Using let / const

// sayHello(); // ReferenceError (TDZ)

const sayHello = function () {
  console.log("Hello again");
};

sayHello();



// ===============================
// arguments object
// ===============================

// The arguments object is available inside functions
// and contains all arguments passed to the function.

function sum() {
  console.log(arguments);
}

sum(1, 2, 3);



// ===============================
// Error Summary
// ===============================

// var function expression
// → TypeError (because variable is undefined)

// let / const function expression
// → ReferenceError (because variable is in TDZ)