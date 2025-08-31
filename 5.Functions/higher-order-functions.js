// 1. **Higher-Order Functions**
// A higher-order function is a function that takes another function as an argument
// or returns a function.

function multiplier(factor) {
    // The function returns another function
    return function(x) {
        return x * factor;
    };
}

// 2. **Example: Returning a Function**
const double = multiplier(2);
console.log(double(5));  // Output: 10 (5 * 2)

// Creating another function using the multiplier
const triple = multiplier(3);
console.log(triple(5));  // Output: 15 (5 * 3)

// 3. **Array Method as Higher-Order Function: map()**
const numbers = [1, 2, 3, 4, 5];

// map() is a higher-order function
const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers);  // Output: [2, 4, 6, 8, 10]

// 4. **Example with a Function that Returns Another Function**
function greetingFactory(greeting) {
    return function(name) {
        return `${greeting}, ${name}!`;
    };
}

const sayHello = greetingFactory("Hello");
console.log(sayHello("Alice"));  // Output: Hello, Alice!

const sayGoodbye = greetingFactory("Goodbye");
console.log(sayGoodbye("Bob"));  // Output: Goodbye, Bob!
