// CONDITIONAL STATEMENTS

// if(condition) {...}
// else if (condition) {...}
// else {...}

// First Example
// let a = 20;
// let b = 20;

// if (a > b) {
//     console.log("a is greater then b");
// } else if(a < b) {
//     console.log("a is less than b");
// } else {
//     console.log('a is equal to b')
// }


// Second Example
// let time = 10;
// let greetings;

// if (time < 10) {
//     greetings = "Good Morning";
//     console.log(greetings);
// } else if (time < 20) {
//     greetings = "Good Day";
//     console.log(greetings);
// } else {
//     greetings = "Good Evening";
//     console.log(greetings);
// }


// 1. Create  variable name (password) store nothing
// 2. If password is equal to 8 print "Welcome"
// 3. If password is less then or equal to 8 print "Password is too short"
// 4. If password is greater then or equalt to 8 print "Too Long Password" & "Password should be 8 characters"
// 5. If all fails print "Please provide a password."

// let password = 6;

// if (password == 8) {
//     console.log("Welcome");
// } else if(password <= 8){
//     console.log("Password is too short");
// } else if(password >= 8){
//     console.log("Too Long Password. Password should be 8 characters")
// } else {
//     console.log("Please provide a password")
// }


// SWITCH STATEMENTS
// let x = 2;
// let bulb;

// switch (x) {
//     case 0:
//         bulb = "off";
//         console.log(bulb)
//         break;
//     case 1:
//         bulb = "on";
//         console.log(bulb)
//         break;
//     default:
//         bulb = "no value found";
//         console.log(bulb)
// }


// 1. Create variable name (fruit) & store "banana"
// 2. If case is "Banana" print "Banana is good!"
// 3. If case is "Orange" print "I am not a fan of orange."
// 4. If case is "Apple" print "How you like the apples"
// 5. default "I have never heard of that fruit"

let fruit = "papaya"

switch (fruit) {
    case "banana":
    console.log("Banana is good!");
    break;
    case "orange":
    console.log("I am not a fan of Orange");
    break;
    case "apple":
    console.log("How you like the apples");
    break;
    default:
    console.log("I have never heard of that fruit");
    break;
}

