// SPREAD OPERATOR IN JS

// 1. Spread operator with functions
// function giveMe4(a, b, c, d) {
//     console.log("a", a);
//     console.log("b", b);
//     console.log("c", c);
//     console.log("d", d);
// }
// giveMe4(1, 2, 3, 4);

// const colors = ['red','green','blue','teal']
// giveMe4(...colors);


// 2. Spread operator with array

// First example
// const strNums = ['one', 'two', 'three']
// const moreStrNums = ['four','five','six']
// const concat = [...strNums, ...moreStrNums]
// console.log(concat)

// Second example
// let people = ['manoj', 'madhav', 'rahul'];
// const allPeps = ['anuj', ...people, 'John']
// console.log(allPeps);



// 3. Spread Operator with objects

// Example 1:
// const obj1 = { x: 1, y: 2 }
// const obj2 = { z: 3 }
// const obj3 = { ...obj1, ...obj2 }
// console.log(obj3)

// Example 2:
// let person = {
//     name: 'manoj',
//     age: 26,
//     gender: 'male'
// };
// const clone = {...person, work: 'Programmer', location: 'India'};
// console.log(clone);


// Challenge for Spread Operator in JS
// 1. Make a clone of "arr, arr2" by using spread operator
// 2. Make a clone of "user" object using spread operator
let arr = [1,2,3];
let arr2 = [4,5];
let cloneArr = [...arr, ...arr2]
console.log(cloneArr)

const user = {
    name: 'Jon',
    age: 22,
}

const cloneUser = {...user};
console.log(cloneUser)