// The filter() method is a built-in array method in JavaScript that allows you to create a new array containing elements that pass a certain condition. It provides a clean and concise way to filter out elements form an array based on a specified criteria.

// Example 1
// const songs = [
//     {name: "Lucky you", duration: 4.34 },
//     {name: "Just Like You", duration: 3.23 },
//     {name: "The Search", duration: 2.33 },
//     {name: "Old Town Road", duration: 1.43 },
//     {name: "The Box", duration: 5.23 },
// ];

// console.log(songs.filter(song => song.duration > 3))

// Example 2
// const computers = [
//     {ram: 4, hdd: 100},
//     {ram: 8, hdd: 256},
//     {ram: 16, hdd: 1000},
//     {ram: 32, hdd: 500},
// ]
// console.log(computers.filter(computers => computers.ram < 16));


// Challenge 1
// 1. Iterate over "ages" array. 
// 2. Print only adults, those whos age is greater then 18. 
// const ages = [32,33,16,40];
// function checkAdults(age) {
//     return age >=18;
// }
// const ageRes = ages.filter(checkAdults);
// console.log(ageRes);


// Challenge 2
// 1. Iterate Over "words" array. 
// 2. Print only those words which length is greater then 6. 

const words = ['spray','limit','elite','exuberant','destruction','present'];
function lengthRes(word) {
    return word.length > 6;
}
const res = words.filter(lengthRes);
console.log(res);
