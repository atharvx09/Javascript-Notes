// ===============================
// Objects
// ===============================

// Objects are a collection of related data and/or functionality,
// represented as key-value pairs.

// They act like a blueprint for representing real-world entities.

// Ways to create objects:
// 1. Object literals
// 2. Constructor functions
// 3. new Object()
// 4. ES6 classes
// 5. Object.fromEntries()
// 6. Object.create(proto)
// 7. Object.assign(target, sources)


// ===============================
// 1. Object Literal
// ===============================

const person = {
    name: "Alice",
    age: 22
  };
  
  
  // ===============================
  // 2. Constructor Function
  // ===============================
  
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  const p1 = new Person("Alice", 34);
  
  
  // ===============================
  // 3. new Object()
  // ===============================
  
  const p = new Object();
  
  p.name = "Bob";
  
  
  // ===============================
  // 4. ES6 Class
  // ===============================
  
  class PersonClass {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }
  
  const p2 = new PersonClass("Boby", 22);
  
  
  // ===============================
  // 5. Object.fromEntries()
  // Converts key-value pair arrays into objects
  // ===============================
  
  const entries = [
    ["a", 1],
    ["b", 2]
  ];
  
  const obj = Object.fromEntries(entries);
  
  
  // ===============================
  // 6. Object.create(proto)
  // Creates a new object using another object as prototype
  // ===============================
  
  const proto = {
    name: "bul",
    age: 34
  };
  
  const p3 = Object.create(proto);
  
  
  // ===============================
  // 7. Object.assign()
  // Used to merge objects
  // ===============================
  
  const obj1 = { name: "brat" };
  const obj2 = { age: 23 };
  
  const obj12 = Object.assign({}, obj1, obj2);
  
  
  // ===============================
  // Property Accessors
  // ===============================
  
  // 1. Dot notation → user.name
  // 2. Bracket notation → user["name"]
  
  const user = {
    name: "Ananya",
    role: "Developer"
  };
  
  const keyToLookUp = "role";
  
  
  // Dot notation fails for dynamic keys
  console.log(user.keyToLookUp);
  
  
  // Bracket notation works with variables
  console.log(user[keyToLookUp]);
  
  
  // ===============================
  // Dot vs Bracket Notation
  // ===============================
  
  // Dot notation:
  // - Treats the key as a literal
  // - Cannot access dynamic properties
  // - Cleaner and more readable
  
  // Bracket notation:
  // - Evaluates the expression inside
  // - Supports variables and dynamic keys
  // - Works with spaces and special characters
  
  
  
  // ===============================
  // Methods
  // ===============================
  
  // Methods are functions inside objects
  
  const calculator = {
    add(a, b) {
      return a + b;
    }
  };
  
  console.log(calculator.add(2, 3));
  
  
  
  // ===============================
  // Object Accessors (get, set)
  // ===============================
  
  const account = {
    balance: 1000,
  
    get amount() {
      return this.balance;
    },
  
    set amount(value) {
      this.balance = value;
    }
  };
  
  account.amount = 2000;
  console.log(account.amount);
  
  
  
  // ===============================
  // Destructuring
  // ===============================
  
  // Extract properties from objects
  
  const employee = {
    id: 1,
    name: "Rahul",
    role: "Engineer"
  };
  
  const { id, name, role } = employee;
  
  console.log(id, name, role);
  
  
  
  // ===============================
  // Map vs Object
  // ===============================
  
  // Object:
  // - Keys are usually strings or symbols
  // - Simple key-value storage
  
  // Map:
  // - Keys can be any data type
  // - Maintains insertion order
  // - Has built-in methods like set(), get(), has()
  
  const map = new Map();
  
  map.set("name", "Alice");
  map.set("age", 25);
  
  console.log(map.get("name"));