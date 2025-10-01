// When we call the forEach helper we pass in anonymous callback function.
// This function gets called one time for every element in the array 
// Whatever is inside the function that logic happens

// Example 1
// const colors = ['teal','blue','red','green'];
// colors.forEach(color =>console.log(color));

// Example 2
// const words = ['hello','bird','tab','green','orange'];
// const capWords = words.forEach((word, index, arr) => {
//     arr[index] = word[0].toUpperCase() + word.substring(1);
// });
// console.log(words)


// Challenge
// Create an array of numbers.
// Create a variable to hold the sum.
// Create the adder function which takes the parameter of number & add that with sum variable.
// Loop over the array, incrementing the sum variable except this time a function gets referenced in the forEach.
// Print the sum variable.
const numbers = [1,2,4,5,6];
let sum = 0;
function adder(number){
    sum += number
}
numbers.forEach(adder);
console.log(sum);