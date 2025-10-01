// The find() method is another built-in array helper in JavaScript that allows you to find the first element in an array that matches a specific condition. It returns the value of the first element that satisfies the given testing function, or undefined if no element is found.

// Example 1
// const peoples = [
//     { name: "Manoj", age: 26 },
//     { name: "John", age: 18 },
//     { name: "Alex", age: 20 },
//     { name: "Jimmy", age: 30 },
//     { name: "Alex", age: 30 },
// ]
// const res = peoples.find(person => person.name == 'Alex');
// console.log(res);

// Example 2
// const posts = [
//     {id: 1, content: 'Image'},
//     {id: 2, content: 'Video'},
//     {id: 3, content: 'Single Post'},
//     {id: 4, content: 'Carousel'},
// ]

// const postRes = posts.find(post => post.content == 'Carousel');
// console.log(postRes)


// Challenge 1
// 1. Iterate over "ages" array
// 2. Print only those ages which is greater then 18
const ages = [3, 10, 18, 20];
const ageRes = ages.find(age => age > 18)
console.log(ageRes)