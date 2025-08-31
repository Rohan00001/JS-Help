// Question: What happens when you declare a variable using let or const in the Global Scope?

// Concept: Variables declared with let and const in the Global Scope are not attached to the window object (in the browser),
//  unlike variables declared with var. They also follow block scope.

let globalLet = "I am a global let";
const globalConst = "I am a global constant";

console.log(globalLet);  // Output: I am a global let
console.log(globalConst);  // Output: I am a global constant

// These are not attached to the window object (in browsers):
// console.log(window.globalLet);  // undefined
// console.log(window.globalConst);  // undefined
