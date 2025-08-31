// Question: How do var, let, and const behave when declared in different scopes like global, function, and block scopes?

// Concept:

// var is function-scoped or globally scoped, and it can be redeclared and updated.

// let and const are block-scoped, cannot be redeclared in the same scope, and are not attached to the global object.

var x = 1;  // Global Scope

function testFunction() {
  var x = 2;  // Function Scope
  let y = 3;  // Block Scope inside the function
  const z = 4;  // Block Scope inside the function
  
  if (true) {
    let y = 5;  // Block Scope inside the if block
    console.log(x);  // Output: 2 (function scope)
    console.log(y);  // Output: 5 (block scope inside the if)
    console.log(z);  // Output: 4 (block scope inside the function)
  }
}

testFunction();
console.log(x);  // Output: 1 (global scope)
