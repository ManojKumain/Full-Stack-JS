// Arrow Functions

// function greet(userName) {
//     return `Hello ${userName}`
// }

// This is the example of the above function in arrow function
// greet = userName => `Hello ${userName}`;
// console.log(greet("Manoj"))

// This is the example of another normal function
// function double(number) {
//     return number * 2
// }
// console.log(double(2));

// This is the above function in arrow function
double = number => number * 2;
console.log(double(6));


// Refactor this code to ES6 arrow function
// setTimeout(function() {
//     console.log("Hello");
//     setTimeout(function() {
//         console.log("Hey");
//         setTimeout(function() {
//             console.log("Namaste");
//             setTimeout(function() {
//                 console.log("Hi");
//                 setTimeout(function() {
//                     console.log("Bonjour")
//                 }, 2000);
//             }, 2000);
//         }, 2000);
//     }, 2000);
// }, 2000);

setTimeout(() => {
    console.log("Hello");
    setTimeout(() => {
        console.log("Hey");
        setTimeout(() => {
            console.log("Namaste");
            setTimeout(() => {
                console.log("Hi");
                setTimeout(() => {
                    console.log("Bonjour")
                }, 2000);
            }, 2000);
        }, 2000);
    }, 2000);
}, 2000);

