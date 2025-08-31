// 1. **Object Creation**
// Creating an object with properties and methods
const person = {
    name: "Rohan",
    age: 23,
    greet() {
        return `Hello, ${this.name}`;
    },
    "is eligible":true
};

console.log(person.greet());  // Output: Hello, Rohan

// 2. **Object Methods**
// Object.keys() - returns an array of keys of the object
const keys = Object.keys(person);
console.log(keys);  // Output: ["name", "age", "greet"]

// Object.values() - returns an array of values of the object
const values = Object.values(person);
console.log(values);  // Output: ["Rohan", 23, [Function: greet]]

// Object.entries() - returns an array of key-value pairs
const entries = Object.entries(person);
console.log(entries);  // Output: [["name", "Rohan"], ["age", 23], ["greet", function]]