// 1. **Hoisting with `var`, `let`, and `const`**
// Question: What is hoisting in JavaScript, and how do `var`, `let`, and `const` behave differently when hoisted?

// `var` is hoisted and initialized with `undefined`.
console.log(a);  // Output: undefined
var a = 10;

// `let` and `const` are hoisted but not initialized (they enter Temporal Dead Zone).
// console.log(b); // Error: Cannot access 'b' before initialization
let b = 20;
