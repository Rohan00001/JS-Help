// Question: How does Function Scope work with variables declared using var?

// Concept: Variables declared with var inside a function are scoped to that function. They cannot be accessed outside the function.

function testFunctionScope() {
    var x = 10;
    console.log(x);  // Output: 10 (Accessible inside the function)
  }
  
  testFunctionScope();
  // console.log(x);  // Error: x is not defined (Cannot access x outside the function)
  