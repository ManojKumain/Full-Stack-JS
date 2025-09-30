// The rest parameter syntax allows a function to accept an indefinite number of arguments
// as an array, providing a way to represent variadic functions in JavaScript.

// Normal function
// function user(userData){
//     console.log(userData);
// }
// user('Manoj');

// Function with rest operator

// Example 1
// function user(...userData) {
//     console.log(userData);
// }
// user('Manoj', 'Programmer', 26, 'football');

// Example 2
// function user(x, ...userData) {
//     console.log(x)
//     console.log(userData);
// }
// user('Manoj', 'Programmer', 26, 'football');

// Example 3
// function person (firstName, lastName, ...hobbies) {
//     console.log('First Name:', firstName);
//     console.log('Last Name:', lastName);
//     console.log('hobbies:', hobbies);
// }
// person('manoj','chand','reading','football','coding');


// Challenge for rest operator
// Create a function which will take unlimited amount of parameters & log all of that params to the console.
// function user(name, age, ...other){
// console.log('name:', name);
// console.log('age:', age);
// console.log('other:', other);
// }
// user('manoj', 22, 'play', 'code', 'write');


