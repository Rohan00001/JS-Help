// 4. **Temporal Dead Zone (TDZ)**
// Question: What is the Temporal Dead Zone (TDZ) and how does it affect `let` and `const`?

// Variables with `let` and `const` are in a Temporal Dead Zone before they are declared.
console.log(x); // Error: Cannot access 'x' before initialization
let x = 10;  // After this line, x is available
