// setInterval()

// setInterval(() => console.log(`This function will be executed every 2 second.`), 2000
// );

// setTimeout 
// setTimeout(function(){
//     console.log(`This function will be executed after 3 seconds`)
// }, 3000)

// Clear Interval
// Stop the interval after 10 seconds
const intervalId = setInterval(function () {
console.log(`This function is being executed at the interval`);
}, 1000)

// Stop the interval after 10 seconds
setTimeout(function(){
    clearInterval(intervalId);
    console.log(`Interval Stopped`)
}, 10000)