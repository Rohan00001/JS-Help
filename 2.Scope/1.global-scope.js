// Question: What is Global Scope in JavaScript, and how do variables declared outside any function or block behave?

// Concept: Variables declared outside any function or block are in the Global Scope and are accessible throughout the entire program.

var globalVar = "I am a global variable";
let globalLet = "I am a global let";
const globalConst = "I am a global constant";

console.log(globalVar);  // Accessible everywhere
console.log(globalLet);  // Accessible everywhere
console.log(globalConst);  // Accessible everywhere


if (true) {
    console.log(globalVar);  // Accessible everywhere
    console.log(globalLet);  // Accessible everywhere
    console.log(globalConst);  // Accessible everywhere
  }