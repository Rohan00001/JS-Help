// 2. **Difference Between `var` and `let` in Terms of Scope**
// Question: How does the scope of a variable declared with `var` differ from one declared with `let`?

// `var` has function or global scope.
function varExample() {
    var x = 100;
    if (true) {
      var x = 200; // same variable, function-scoped
      console.log(x); // Output: 200
    }
    console.log(x); // Output: 200 (var is function-scoped)
  }
  varExample();
  
  // `let` has block scope.
  function letExample() {
    let y = 100;
    if (true) {
      let y = 200; // different variable, block-scoped
      console.log(y); // Output: 200
    }
    console.log(y); // Output: 100 (let is block-scoped)
  }
  letExample();
  