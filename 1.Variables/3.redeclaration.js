// 3. **Re-declaring Variables with `var`, `let`, and `const`**
// Question: Can you redeclare a variable in the same scope using `var`, `let`, or `const`? Explain with examples.

// `var` allows redeclaration in the same scope.
var z = 10;
var z = 20; // No error
console.log(z); // Output: 20

// `let` does not allow redeclaration in the same scope.
let w = 30;
// let w = 40; // Error: Identifier 'w' has already been declared

// `const` does not allow redeclaration or reassignment.
const t = 50;
// const t = 60; // Error: Identifier 't' has already been declared
// t = 60; // Error: Assignment to constant variable
