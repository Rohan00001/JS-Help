// 2. **Array** - Ordered list of values (stored by reference)

// Creating an array
const fruits = ["apple", "banana", "mango"];

// Accessing array elements using index
console.log(fruits[0]); // Output: "apple"
console.log(fruits[1]); // Output: "banana"

// Modifying array elements
fruits[2] = "orange";
console.log(fruits[2]); // Output: "orange"

// Adding new elements to the array using push()
fruits.push("grape");
console.log(fruits);  // Output: ["apple", "banana", "orange", "grape"]

// Removing the last element from the array using pop()
const lastFruit = fruits.pop();
console.log(lastFruit);  // Output: "grape"
console.log(fruits);  // Output: ["apple", "banana", "orange"]

// Accessing array elements using forEach loop
fruits.forEach(fruit => {
  console.log(fruit);  // Output: apple, banana, orange
});

// Finding the index of an element using indexOf()
console.log(fruits.indexOf("banana"));  // Output: 1 (index of "banana")

// Checking if a value is in the array using includes()
console.log(fruits.includes("mango"));  // Output: false
console.log(fruits.includes("banana")); // Output: true
