// 1. **Object Destructuring**
const person = {
    name: "Rohan",
    age: 23,
    location: "Durgapur",
    "is eligible":true
};

// Destructuring the object to extract values
const { name, age, location, "is eligible": isEligible } = person;
console.log(name);  // Output: "Rohan"
console.log(age);   // Output: 23
console.log(isEligible);   // Output: true

// 2. **Array Destructuring**
const fruits = ["apple", "banana", "cherry"];

// Destructuring the array to get specific elements
const [first, second] = fruits;
console.log(first);  // Output: "apple"
console.log(second); // Output: "banana"

// 3. **Copying Objects and Arrays with Spread Operator**
const newFruits = [...fruits];  // Creates a shallow copy of the array
console.log(newFruits);  // Output: ["apple", "banana", "cherry"]

const newPerson = { ...person };  // Creates a shallow copy of the object
console.log(newPerson);  // Output: { name: "Rohan", age: 23, location: "Kolkata" }

// 4. **Merging Objects**
const fullPerson = { ...person, location: "Kolkata", profession: "Developer" };
console.log(fullPerson);  // Output: { name: "Rohan", age: 23, location: "Kolkata", profession: "Developer" }

// 5. **Rest Parameters**
// Collects all remaining arguments into an array
function sum(...nums) {
    return nums.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3, 4));  // Output: 10
console.log(sum(5, 10, 15));   // Output: 30
