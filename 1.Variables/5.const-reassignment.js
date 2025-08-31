// 5. **Reassigning Variables with `const`**
// Question: Can you reassign a variable declared with `const`? What restrictions apply when using `const`?

// `const` variables cannot be reassigned, but objects or arrays declared with `const` can have their properties mutated.
const person = { name: 'Alice' };
person.name = 'Bob';  // Allowed, we can mutate the properties of the object
console.log(person.name); // Output: Bob

// person = {};  // Error: Assignment to constant variable
