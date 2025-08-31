// Question: What is Block Scope, and how do let and const behave in block-scoped contexts like loops or conditionals?

// Concept: let and const have Block Scope, meaning they are only accessible within the block in which they are defined.

if (true) {
    let a = 50;
    const b = 60;
    console.log(a);  // Output: 50
    console.log(b);  // Output: 60
  }
  
  // console.log(a);  // Error: a is not defined (let is block-scoped)
  // console.log(b);  // Error: b is not defined (const is block-scoped)
  