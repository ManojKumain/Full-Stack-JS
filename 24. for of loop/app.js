// The "for...of" loop in JavaScript is a modern iteration statement introduced in ECMAScript 6 (ES6) that provides a concise and easy way to loop over elements in iterable objects like arrays, strings, maps, sets, and more. It allows you to iterate directly over the values of the elements, rather than dealing with their indices or keys, which makes the code more readable and less error-prone.
// for (variable of iterable) {...}


// Example1: Array
// let peoples = ['huxn', 'manoj', 'madhav', 'rahul', 'brad'];
// for (let people of peoples){
//     console.log(peoples);
// }

// Example 2: String
// const text = "Hello"
// for (const char of text) {
//     console.log(char)
// }

// Challenge
// Iterate over "array1" & log the values using for of loop.
const array1 = ['a', 'b', 'c'];
for (const index of array1){
    console.log(index)
}