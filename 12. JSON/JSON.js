// JSON

const person = {
    "name": "John Doe",
    "age": 20,
    "email": "jd@gmail.com",
    "isSubscribed": true,
    "hobbies": ["Reading", "Running", "Cooking"],
    "address": {
        "city": "New York",
        "country": "india"
    }
}


// 1. JSON.STRINGIFY() method
console.log(person);
const jsonString = JSON.stringify(person);
console.log(jsonString);


// 2. JSON.parse() method
const parsedObject = JSON.parse(jsonString);
console.log(parsedObject);