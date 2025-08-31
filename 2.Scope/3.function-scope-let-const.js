// Question: How do let and const behave inside a function in terms of scope?

// Concept: Both let and const are function-scoped when declared inside a function, meaning they are only accessible within that function.

function testFunctionScopeLetConst() {
    let y = 20;
    const z = 30;
    console.log(y);  // Output: 20
    console.log(z);  // Output: 30
  }
  
  testFunctionScopeLetConst();
  // console.log(y);  // Error: y is not defined (Cannot access y outside the function)
  // console.log(z);  // Error: z is not defined (Cannot access z outside the function)
  