// function countTo5(count = true) {
//     if (count == true) {
//         for (let i =1; i <= 5; i++ ) {
//             console.log(`Count: ${i}`)
//         }
//     }
// }
// countTo5();

// function ratings(rate = 0) {
//     if (rate == 5) {
//         console.log(`High Ratings :)`)
//     } else if (rate == 0) {
//         console.log(`Low Ratings :(`)
//     }
// }

// ratings(5);


// Challenge for default function parameters
// Create function name (multiply) with 2 parameters (a, b)
// provide 1 as the default value to parameter "b"
function mul (a, b = 2) {
    return a * b;
}

console.log(mul(5))