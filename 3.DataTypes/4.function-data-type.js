// 3. **Function** - Callable object (stored by reference)

// Function declaration
function greet() {
    console.log("Hello!");
  }
  
  // Calling the function
  greet(); // Output: "Hello!"
  
  // Function with parameters
  function greetPerson(name) {
    console.log(`Hello, ${name}!`);
  }
  
  // Calling the function with arguments
  greetPerson("Rohan");  // Output: "Hello, Rohan!"
  
  // Function returning a value
  function add(a, b) {
    return a + b;
  }
  
  // Calling the function and storing the result
  const result = add(5, 10);
  console.log(result); // Output: 15
  
  // Anonymous function assigned to a variable
  const multiply = function(a, b) {
    return a * b;
  };
  
  // Calling the anonymous function
  console.log(multiply(3, 4)); // Output: 12
  
  // Arrow function (ES6)
  const subtract = (a, b) => a - b;
  
  // Calling the arrow function
  console.log(subtract(10, 3)); // Output: 7
  
  // Functions as first-class objects: Passing functions as arguments
  function operate(a, b, operation) {
    return operation(a, b);
  }
  
  // Using the functions as arguments
  console.log(operate(5, 2, add));       // Output: 7 (addition)
  console.log(operate(5, 2, multiply));  // Output: 10 (multiplication)
  