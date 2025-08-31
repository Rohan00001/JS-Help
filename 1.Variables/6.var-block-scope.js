// 6. **`var` and Block-Level Scope**
// Question: What happens when you declare a variable using `var` inside a block, such as a loop or an `if` statement?

// `var` does not respect block-level scope, and is function-scoped.
if (true) {
    var a = 10;
  }
  console.log(a); // Output: 10 (variable is accessible outside the block because `var` is function-scoped)
  
  // Loop example with `var`:
  for (var i = 0; i < 3; i++) {
    console.log(i); // Output: 0, 1, 2
  }
  console.log(i); // Output: 3 (var makes `i` accessible outside the loop)
  