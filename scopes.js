// ===============================
// Scopes
// ===============================

// Scope determines the accessibility (visibility) of variables
// in different parts of a program.


// ===============================
// 1. Global Scope
// ===============================

// If a variable is declared outside of any function or block,
// it belongs to the global scope.

// Global variables are accessible from anywhere in the program.

// Risk:
// Too many global variables can cause namespace pollution,
// where variables accidentally overwrite each other.

var globalVar = "I am global";

function checkGlobal() {
  console.log(globalVar);
}

checkGlobal();


// ===============================
// 2. Function (Local) Scope
// ===============================

// Variables declared inside a function are only accessible
// within that function.

// var, let, and const all respect function scope.

function localScopeExample() {
  let localVar = "I am local";

  console.log(localVar);
}

localScopeExample();

// console.log(localVar); // ReferenceError



// ===============================
// 3. Block Scope (ES6+)
// ===============================

// Variables declared with let and const are block scoped.

// They only exist inside the block { } where they are declared.

if (true) {
  let blockVar = "I exist only in this block";
  const anotherBlockVar = "Also block scoped";

  console.log(blockVar);
  console.log(anotherBlockVar);
}

// console.log(blockVar); // ReferenceError



// ===============================
// var ignores block scope
// ===============================

// var is function scoped, not block scoped.

if (true) {
  var leakedVar = "I leak outside the block";
}

console.log(leakedVar);



// ===============================
// Scope Chain
// ===============================

// When a variable is referenced, JavaScript searches for it in
// the following order:

// 1. Current (local) scope
// 2. Parent scope
// 3. Global scope

// If the variable is not found anywhere,
// JavaScript throws a ReferenceError.

let globalValue = "global";

function outer() {
  let outerValue = "outer";

  function inner() {
    let innerValue = "inner";

    console.log(innerValue);
    console.log(outerValue);
    console.log(globalValue);
  }

  inner();
}

outer();



// ===============================
// Lexical Scoping
// ===============================

// JavaScript uses lexical scoping.

// This means the scope of a variable is determined by
// where it is written in the source code,
// not where the function is called.

function outerFunction() {
  const secret = "I am hidden";

  function innerFunction() {
    console.log(secret);
  }

  innerFunction();
}

outerFunction();



// ===============================
// Lexical Scope leads to Closures
// ===============================

// Because functions remember their lexical environment,
// closures are possible.

function closureExample() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const counter = closureExample();

counter();
counter();
counter();