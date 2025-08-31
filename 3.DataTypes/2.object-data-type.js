// 1. **Object** - Collection of key-value pairs (stored by reference)

// Creating an object using object literal
const person = {
    name: "John",
    age: 25,
    "is Employed": true
  };
  
  // Accessing object properties using dot notation
  console.log(person.name); // Output: "John"
  console.log(person.age);  // Output: 25
  
  // Accessing object properties using bracket notation
  console.log(person["is Employed"]); // Output: true
  
  // Modifying object properties using dot notation
  person.age = 26;
  console.log(person.age);  // Output: 26
  
  // adding object properties using bracket notation
  person["isEmployed"] = false;
  console.log(person["isEmployed"]);  // Output: false

  console.log(person);
  
  // Adding new properties to an object
  person.city = "New York";
  console.log(person.city);  // Output: "New York"
  
  // Using bracket notation with dynamic keys
  const key = "name";
  console.log(person[key]);  // Output: "John" (Accessing 'name' dynamically)
  