// 1. **Function Declaration**
// Traditional way to define a function
function greet(name) {
    return "Hello, " + name;
}

console.log(greet("Alice"));  // Output: Hello, Alice

// 2. **Arrow Function**
// Shorter syntax, especially useful for callbacks
const greetArrow = name => "Hello, " + name;

// Implicit return (no curly braces means automatic return)
console.log(greetArrow("Bob"));  // Output: Hello, Bob

// Explicit return (requires curly braces and the return keyword)
const greetExplicit = (name) => {
    return "Hello, " + name;
};
console.log(greetExplicit("Charlie"));  // Output: Hello, Charlie

// 3. **Callback Function**
// A function passed as an argument to another function
function processUserInput(callback) {
    const name = "Rohan";
    callback(name);
}

// Example usage of a callback function
processUserInput(name => {
    console.log("Hello " + name);  // Output: Hello Rohan
});

// Callback function can also be used inline
processUserInput(name => console.log(`Welcome, ${name}!`));  // Output: Welcome, Rohan!
