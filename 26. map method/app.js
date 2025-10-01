// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

// Example 1
// let numbers = [1,2,3,4,5];
// let double = numbers.map(num => num * 2);
// console.log(double);

// Example 2
// let peoples = [
//     {firstName: 'Madhav', lastName: 'Kumain'},
//     {firstName: 'Rahul', lastName: 'Panuli'},
//     {firstName: 'Raghav', lastName: 'Raaj'},
// ]

// const results = peoples.map(person => {
//     return [person.firstName, person.lastName]
// })
// console.log(results);


// Create array with random numbers.
// Map over each item in that array, and multiply each item by 10
const numbers = [1,2,3,4,5];
const results = numbers.map(number => number * 10 )
console.log(results)