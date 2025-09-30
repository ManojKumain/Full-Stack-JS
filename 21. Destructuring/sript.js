// Destructuring allows us to "unpack" values from data-structures (Arrays, objects) into separate distinct variables.


// 1. Destructuring with arrays

// Example 1
// const foo = ['one', 'two', 'three'];
// const [one, two, three] = foo
// console.log(one);
// console.log(two);
// console.log(three);

// Example 2:
// let a, b
// [a = 5, b = 8] = ['one','two']
// console.log(a)
// console.log(b)



// Destructing in Functions

// Example 1
// function f() {
//     return [1,2]
// }
// let a, b
// [a, b] = f()
// console.log(a)
// console.log(b)

// Example 2
// function f() {
//     return [1,2,3]
// }
// const [a, , b] = f()
// console.log(a);
// console.log(b);


// Assigning the rest of an array to a variable
// const [a, ...b] = ['one', 'two', 'three', 1, true];
// console.log(a);
// console.log(b);


// Challenge of Array destructuring
// Your task is to use array destructuring to extract the first three colors form the colors array and assign them to separate variable named color1, color2, and color3.
// After extracting the colors, log each variable's value to the console

// const colors = ['red', 'blue', 'green'];
// const [red, blue, green] = colors
// console.log(red);
// console.log(blue);
// console.log(green);


// Object destructuring -> order doesn't matter but the name does matter
// const student = {
//     name: 'madhav',
//     age: 22,
//     hobby: 'sql'
// }

// const {name, age, hobby} = student;
// console.log(name);
// console.log(age);
// console.log(hobby);


// Challenge on object destructuring:
// Your task is to use object destructuring to extract the name, age, and country properties from the person object.
// After extracting the properties, log each variable's value to the console.
// const person = {
//     name: 'Rahul',
//     age: 22,
//     country: "India",
// }

// const {name, age, country} = person;
// console.log(name);
// console.log(age);
// console.log(country);



// RENAMING OR DESTRUCTURING IN JS (objects)
// const num = {x: 100, y: 200}
// const {x: num1 , y: num2} = num;
// console.log(x);
// console.log(y);
// console.log(num1);
// console.log(num2);


// OBJECT DESTRUCTURING WITH REST OPERATOR
// let {a, b, ...rest} = {
//     a: 100, b: 200, c:300, d:400, e:500
// }
// console.log(a);
// console.log(b);
// console.log(rest);


// Object Destructuring Challenge

// Your task is to use object destructuring to extract the name, age, and country properties from the person object and assign then to separate variables name personName, personAge, and personCountry.
// After extracting the properties, log each variable's value to the console.
// let person = {name: "Sam", age: 22, country: 'India'}
// let {name: personName, age: personAge, country: personCountry} = person;
// console.log(personName);
// console.log(personAge);
// console.log(personCountry);



// FUNCTION DESCTRUCTURING IN JS

// const person = {
//     name: 'john doe',
//     age: 26,
//     country: 'India'
// }
// function printPersonInfo({ name, age, country }) {
//     console.log(`Name: ${name}`);
//     console.log(`Age: ${age}`);
//     console.log(`Country: ${country}`);
// }
// printPersonInfo(person)


// let options = {title: 'My menu', items: ['item1','item2']}

// function showMenu({title, width: w = 100, height: h = 200, items: [item1, item2]}) {
//     console.log(`${title} ${w} ${h}`)
//     console.log(item1)
//     console.log(item2)
// }
// showMenu(options);


// NESTED DESTRUCTURING
// const songs = [
//     { name: "Lucky You", singer: 'Joyner', duration: 4.34 },
//     { name: "Just Like You", singer: 'NF', duration: 3.23 },
//     { name: "Humble Singer", singer: 'Kendrick Lamar', duration: 2.33 },
//     { name: "Old Town Road", singer: 'Lil Nas X', duration: 1.43 },
//     { name: "Cold Sholder", singer: 'Central Cee', duration: 5.24 },
// ];

// const [, , , {singer: s}] = songs
// console.log(s)