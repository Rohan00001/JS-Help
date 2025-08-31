// Array Methods: filter(), map(), reduce(), forEach(), some()

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1. Using `filter()` - Filter out even numbers
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log('Even Numbers:', evenNumbers);
// Output: [2, 4, 6, 8, 10]

// 2. Using `map()` - Multiply each number by 2
const doubledNumbers = numbers.map((num) => num * 2);
console.log('Doubled Numbers:', doubledNumbers);
// Output: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

// 3. Using `reduce()` - Sum of all numbers
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log('Sum of Numbers:', sum);
// Output: 55

// 4. Using `forEach()` - Print each number (side effect)
console.log('Numbers using forEach():');
numbers.forEach((num) => {
    console.log(num);  // This will log each number from the array
});
// Output: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 (printed one by one)

// 5. Using `some()` - Check if there are any even numbers
const hasEven = numbers.some((num) => num % 2 === 0);
console.log('Contains even numbers:', hasEven);
// Output: true (because there are even numbers in the array)

// 6. Using `every()` - Check if all numbers are even
const allEven = numbers.every((num) => num % 2 === 0);
console.log('All numbers are even:', allEven);
// Output: false (because not all numbers are even)

// 7. Using `find()` - Find the first even number
const firstEven = numbers.find((num) => num % 2 === 0);
console.log('First even number:', firstEven);
// Output: 2 (first even number in the array)

// 8. Using `sort()` - Sort numbers in ascending order
const sortedNumbers = [...numbers].sort((a, b) => a - b);
console.log('Sorted Numbers:', sortedNumbers);
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
