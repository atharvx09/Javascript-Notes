// ===============================
// for...in & for...of
// ===============================


// ===============================
// for...in
// ===============================

// for...in iterates over enumerable property names (keys) of an object.

// It also iterates over properties inherited from the prototype chain.

// If an array has empty indexes (holes), for...in skips them.

let obj = {
    name: "Atharav",
    age: 22,
    city: "Bhopal",
  };
  
  let obj2 = {
    __proto__: obj,
    fname: "Lakshya",
  };
  
  
  // Iterates over both own properties and inherited properties
  
  for (let key in obj2) {
    console.log(key);
  }
  
  
  // Output:
  // fname
  // name
  // age
  // city
  
  
  
  // ===============================
  // Object.keys()
  // ===============================
  
  // Object.keys() returns only the object's own properties,
  // not properties from the prototype chain.
  
  for (let key of Object.keys(obj2)) {
    console.log(key);
  }
  
  
  // Output:
  // fname
  
  
  
  // ===============================
  // for...of
  // ===============================
  
  // for...of iterates over VALUES of iterable objects.
  
  // Iterable objects include:
  // - Arrays
  // - Strings
  // - Maps
  // - Sets
  // - Generators
  
  
  const arr = [10, 20, 30];
  
  for (let value of arr) {
    console.log(value);
  }
  
  
  // ===============================
  // Example with String
  // ===============================
  
  const str = "JS";
  
  for (let char of str) {
    console.log(char);
  }
  
  
  // ===============================
  // Example with Map
  // ===============================
  
  const map = new Map();
  map.set("name", "Atharv");
  map.set("age", 22);
  
  for (let [key, value] of map) {
    console.log(key, value);
  }
  
  
  // ===============================
  // Key Difference
  // ===============================
  
  // for...in → iterates over keys (property names)
  
  // for...of → iterates over values of iterable objects
  
  
  
  // ===============================
  // Important Interview Note
  // ===============================
  
  // for...of does NOT work on plain objects.
  
  
  // for (let value of obj) {
  //   console.log(value);
  // }
  
  // TypeError: obj is not iterable
  
  
  
  // To iterate object values using for...of
  
  for (let value of Object.values(obj)) {
    console.log(value);
  }