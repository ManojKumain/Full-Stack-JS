// Function

// 1. Creating a function (Function declaration)
// function greet() {
//     console.log("Hello from a function");
// }


// 2. Call, run, execute a function
// greet();
// greet();
// greet();


// 3. Creating a function with parameter (local variable)
// function sayHello(name){
//     console.log(`Hello ${name}`);
// }


// 4. Calling a function with parameter
// sayHello('Manoj')
// sayHello('Madhav')


// 5. Return in Function
// function add(x, y) {
//     return x + y;
// }

// const res1 = add(10, 20);
// const res2 = add(100, 20);
// const res3 = add(100, 200);

// console.log(res1)
// console.log(res2)
// console.log(res3)


// 6. Function Challenge
// Create function name (myFunction)
// This function will take 2 parameters
// Any number we pass as argument it will multiply that number
// As argument pass your favorite numbers.
// Log that value

// function myFunction(x, y) {
//     return x * y;
// }

// console.log(myFunction(10, 20));


// 7. Function Declaration
// function sayHello(userName) {
//     console.log(`Hello ${userName}`)
// }
// sayHello('Manoj');

// 8. Function Expression
// const greetings = function(user){
//     console.log(`Hello ${user}`)
// };

// greetings('John');


// 9. Callback function in JS -> When we provide function as an (argument) to other function that function is known as callback function.

// function showCallFunc(fn) {
//     const value = 10;
//     fn(value);
// }

// showCallFunc(function (value) {
//     console.log(value);
// });

// function greet(name, cb){
//     console.log(`Hello ${name}`);
//     cb ();
// }

// function cb() {
//     console.log(`I am callback function`);
// }

// greet('Jack', cb);


// 10. Exercise
// 1. Create a function name (showCallFunc)
// 2. pass 'fn' as parameter
// 3. Inside that function, create variable which holds value of 10
// 4. Pass that value of the callback function
// 5. Now create callback function & print that value which you pass as parameter to the callback func.

function showCallFunc(fn){
    let value = 10
    fn(value);
}

showCallFunc(function(value){
    console.log(value);
})