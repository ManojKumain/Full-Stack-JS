// 1. One way of creating a method in JS

// function greet() {
//     return `Hello, my name is ${person.name} & I am ${person.age} years old.`
// }

// const person = {
//     name: 'John',
//     age: 16,
//     greet
// }

// console.log(person.greet());


// 2. Second way of creating a method in JS
const person = {
    name: 'Manoj',
    age: 19,
    greet: function () {
        return `Hello, my name is ${person.name} & I am ${person.age} years old. `;
    }
}

console.log(person.greet());