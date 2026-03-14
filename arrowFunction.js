// ===============================
// Arrow Functions
// ===============================

// Arrow functions were introduced in ES6.

// They provide a shorter syntax for writing function expressions.

// The most important characteristic:
// Arrow functions DO NOT have their own `this`.
// They inherit `this` from the surrounding lexical scope.


// ===============================
// Basic Syntax
// ===============================

const add = (a, b) => {
    return a + b;
  };
  
  console.log(add(2, 3));
  
  
  // ===============================
  // Concise Syntax
  // ===============================
  
  // If the function has a single expression,
  // curly braces and return keyword can be omitted.
  
  const multiply = (a, b) => a * b;
  
  console.log(multiply(3, 4));
  
  
  // ===============================
  // Single Parameter Rule
  // ===============================
  
  // Parentheses can be omitted when there is only one parameter.
  
  const square = x => x * x;
  
  console.log(square(5));
  
  
  // ===============================
  // Returning Objects
  // ===============================
  
  // When returning an object, wrap it in parentheses
  // to avoid confusion with function body.
  
  const createUser = () => ({ name: "Ananya", role: "Developer" });
  
  console.log(createUser());
  
  
  // ===============================
  // No arguments object
  // ===============================
  
  // Arrow functions do not have their own `arguments` object.
  // Instead, we use rest parameters.
  
  const printArgs = (...args) => {
    console.log(args);
  };
  
  printArgs(1, 2, 3, 4);
  
  
  // ===============================
  // Lexical `this` Behavior
  // ===============================
  
  function NormalFunctionExample() {
    this.value = 10;
  
    setTimeout(function () {
      console.log(this.value);
    }, 1000);
  }
  
  // In this case, `this` refers to global object or undefined
  
  
  function ArrowFunctionExample() {
    this.value = 10;
  
    setTimeout(() => {
      console.log(this.value);
    }, 1000);
  }
  
  // Arrow function inherits `this` from the surrounding scope
  
  
  
  // ===============================
  // Not Constructible
  // ===============================
  
  // Arrow functions cannot be used as constructors
  
  const Person = (name) => {
    this.name = name;
  };
  
  // new Person("Rahul")   // Error
  
  
  // ===============================
  // Cannot be Generator Functions
  // ===============================
  
  // Arrow functions cannot use yield
  
  // const gen = () => {
  //   yield 1;   // Syntax Error
  // };
  
  
  
  // ===============================
  // Real-life Use Cases
  // ===============================
  
  // 1. Array manipulation (map, filter, reduce)
  
  const numbers = [1, 2, 3, 4];
  
  const doubled = numbers.map(n => n * 2);
  
  console.log(doubled);
  
  
  // 2. Handling callbacks (timers and events)
  
  setTimeout(() => {
    console.log("Executed after delay");
  }, 1000);
  
  
  // 3. Promises and async chains
  
  Promise.resolve(5)
    .then(value => value * 2)
    .then(result => console.log(result));
  
  
  
  // ===============================
  // When NOT to use Arrow Functions
  // ===============================
  
  // 1. Object methods when `this` should refer to the object
  
  const user = {
    name: "Rahul",
  
    greet: () => {
      console.log(this.name);
    }
  };
  
  user.greet();
  
  // `this` will not refer to the user object
  
  
  
  // 2. Event listeners when `this` should refer to the element
  
  // button.addEventListener("click", () => {
  //   console.log(this);
  // });
  
  
  
  // ===============================
  // call(), apply(), bind()
  // ===============================
  
  // These methods cannot change `this` of arrow functions
  // because arrow functions capture `this` lexically.
  
  const obj = {
    value: 100
  };
  
  const showValue = () => {
    console.log(this.value);
  };
  
  showValue.call(obj);