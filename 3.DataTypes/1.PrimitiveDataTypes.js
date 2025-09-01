// Primitive Data Types in JavaScript

// 1. **String** - Represents textual data.
let str = "Hello, World!";
console.log(typeof str);  // Output: "string"

// 2. **Number** - Represents both integers and floating-point numbers.
let num = 42;
let floatNum = 3.14;
console.log(typeof num);  // Output: "number"
console.log(typeof floatNum);  // Output: "number"

// 3. **Boolean** - Represents logical values: true or false.
let isLoggedIn = true;
let isActive = false;
console.log(typeof isLoggedIn);  // Output: "boolean"
console.log(typeof isActive);  // Output: "boolean"

// 4. **Undefined** - A variable declared but not assigned a value.
let x;
console.log(typeof x);  // Output: "undefined"

// 5. **Null** - Represents an intentional absence of value.
let y = null;
console.log(typeof y);  // Output: "object" (this is a known JavaScript bug, where `typeof null` returns "object")

// 6. **Symbol** - A unique and immutable identifier (ES6).
const sym = Symbol("id");
console.log(typeof sym);  // Output: "symbol"
console.log(sym["id"]);

// 7. **BigInt** - Used for very large integers beyond Number.MAX_SAFE_INTEGER.
const bigInt = 12345678901234567890123456789012345n;
console.log(typeof bigInt);  // Output: "bigint"
