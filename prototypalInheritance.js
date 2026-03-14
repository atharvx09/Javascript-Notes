// ===============================
// Prototypal Inheritance
// ===============================

// JavaScript uses prototypal inheritance.
// Objects can inherit properties and methods from another object.

// Functions in JavaScript automatically get a prototype object.
// Methods placed on the prototype are shared between instances.


// ===============================
// Example using Prototype
// ===============================

function Person(name) {
    this.name = name;
  }
  
  Person.prototype.sayHi = function () {
    console.log("Hi " + this.name);
  };
  
  const p1 = new Person("Monish");
  const p2 = new Person("Rahul");
  
  p1.sayHi();
  p2.sayHi();
  
  
  // ===============================
  // Memory Behavior
  // ===============================
  
  // p1 and p2 each have their own property:
  // - name
  
  // But they share ONE common method:
  // - sayHi (stored on Person.prototype)
  
  console.log(p1.sayHi === p2.sayHi);
  
  // true
  // because both objects reference the same prototype method
  
  
  
  // ===============================
  // If method is defined inside constructor
  // ===============================
  
  function Person2(name) {
    this.name = name;
  
    this.sayHi = function () {
      console.log("Hello " + this.name);
    };
  }
  
  const a = new Person2("A");
  const b = new Person2("B");
  
  a.sayHi();
  b.sayHi();
  
  
  // ===============================
  // Memory Behavior in this case
  // ===============================
  
  // Every time you call:
  // new Person2()
  
  // JavaScript creates:
  // - A new object
  // - A new function sayHi
  
  console.log(a.sayHi === b.sayHi);
  
  // false
  // because each instance has its own copy of the function
  
  
  
  // ===============================
  // Why Prototype is Better
  // ===============================
  
  // Prototype methods:
  // - Save memory
  // - Share functionality between objects
  // - Improve performance when many objects are created