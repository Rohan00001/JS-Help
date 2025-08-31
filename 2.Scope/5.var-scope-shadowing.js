// Question: What happens when a variable is declared with var inside a function and also globally outside a function?

// Concept: A function-scoped var inside a function can shadow a global var of the same name, causing issues when trying to access the global variable.

var globalVar = "Global Variable";

function testVarShadowing() {
  var globalVar = "Function Scoped Variable";  // Shadows the global variable
  console.log(globalVar);  // Output: Function Scoped Variable
}

testVarShadowing();
console.log(globalVar);  // Output: Global Variable (global variable is not affected)
