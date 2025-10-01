// The "for ...in" loop in JavaScript is used to iterate over the enumerable properties of an object. It is a way to loop through the keys (property names) of an object.
// for (let key in object) {...}

// first example of for in loop using objects in js
// let person = {
//     name: "Manoj",
//     age: 26,
//     gender: "male"
// }
// for (let keys in person) {
//     console.log(keys, person[keys]);
// }


// 2nd example
// let list = ['one','two','three','four']
// for (let index in list){
//     console.log(`${index}: ${list[index]}`)
// }


// Challenge
// Iterate over object & log the property and the value of that object using for in loop
const object = {a: 1, b: 2, c: 3};
for (let keys in object){
    console.log(`${keys}: ${object[keys]}`)
}