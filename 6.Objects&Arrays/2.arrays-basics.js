// 1. **Array Creation**
const fruits = ["apple", "banana", "cherry"];

// 2. **Array Methods**
// push() - Adds an item at the end of the array
fruits.push("orange");
console.log(fruits);  // Output: ["apple", "banana", "cherry", "orange"]

// pop() - Removes the last item of the array
fruits.pop();
console.log(fruits);  // Output: ["apple", "banana", "cherry"]

// shift() - Removes the first item of the array
fruits.shift();
console.log(fruits);  // Output: ["banana", "cherry"]

// unshift() - Adds an item at the beginning of the array
fruits.unshift("kiwi");
console.log(fruits);  // Output: ["kiwi", "banana", "cherry"]

// 3. **Functional Array Methods**
// map() - Transforms each element in the array
const fruitLengths = fruits.map(fruit => fruit.length);
console.log(fruitLengths);  // Output: [4, 6, 6]

// filter() - Filters elements based on a condition
const longFruits = fruits.filter(fruit => fruit.length > 5);
console.log(longFruits);  // Output: ["banana", "cherry"]

// reduce() - Reduces array to a single value (sum in this case)
const totalLength = fruits.reduce((acc, fruit) => acc + fruit.length, 0);
console.log(totalLength);  // Output: 16

// forEach() - Loops through each item and performs an action (side effect)
fruits.forEach(fruit => {
    console.log(fruit);  // Output: kiwi, banana, cherry (logged individually)
});
