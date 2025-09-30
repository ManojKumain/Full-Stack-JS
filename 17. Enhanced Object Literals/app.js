// Enhanced object literals

// function user(name, age, work) {
//     return {
//         name,
//         age,
//         work,
//         intro: () => console.log(`My name is ${name} & I'm ${age} years old`)
//         ,
//     };
// }

// const manoj = user("manoj", 26, "Programmer");
// const alex = user("alex", 16, "Programmer");
// console.log(manoj);
// console.log(manoj.intro());


// Refactor ES5 CODE TO ES6 (Enhanced Object Literals)
// ES5 code
// var a = 1;
// var b = 2;
// var c = 3;

// var obj = {
//     a: a,
//     b: b,
//     c: c,
// }

// let a = 1, b = 2, c = 3;
// let ojb = {
//     a,
//     b,
//     c,
// }

// console.log(ojb)


// Second challenge of Enhanced Obj Literals
// ES5 code
// var lib = {
//     sum: function (a,b) {
//         return a + b;
//     },
//     mult: function (a,b) {
//         return a * b;
//     },
// }
// console.log(lib.sum(2,3))
// console.log(lib.mul(2,3))

// const lib = {
//     sum: (a,b) => a + b,
//     mul: (a,b) => a * b,
// }

// console.log(lib.sum(2,3))
// console.log(lib.mul(2,3))


// 3rd Challenge
// function getPersionES6(name, age, height){
//     return {
//         name: name,
//         age: age,
//         height: height,
//     };
// }

// getPersionES6("Manoj", 19, 200);
// Expected output: {name: "Manoj", age: 26, height: 200}


function getPersionES6(name, age, height){
    return {
        name,
        age,
        height,
    };
}

;
console.log(getPersionES6("Manoj", 19, 200))


