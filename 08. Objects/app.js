// OBJECTS IN JS -> key value pair

const person = {
    firstName: 'Manoj',
    lastName: 'Kumain',
    age: 19,
    location: ['Planet', 'Earth'],

};

// const arr = [];
// console.log(typeof arr);
// console.log(typeof person);


// Accessing Items from our object
// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.location);
// console.log(person.age);
// console.log(person['firstName']);

// Delete from object
// delete person.firstName;

// console.log(person);


// CHALLENGE ON OBJECT
// 1. Create object name (car)
// 2. Add (type, model, color) as properties
// 3. Check the type of object
// 4. Update the type property to "Toyota"
// 5. Add new property wheels
// 6. Log car to the console

const car = {
    type: "BMW",
    model: 2015,
    color: "black"
};

// Updating the property
console.log(car.type = 'Toyota');
console.log(car);

car.wheels = 'alloy';
console.log(car);



