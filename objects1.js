//if the object is created using constructor then, it will be singleton object
//object.create
//objects are mutable, so we can add, modify, or delete properties
//objects are reference type, so they are stored in heap memory
// Objects in JavaScript are collections of key-value pairs, where keys are strings (or Symbols) and values can be any data type.
// They are used to store and manage data in a structured way, allowing for easy access and manipulation of related information.

//otherwise its object literals
const mySum = Symbol("Key1"); // Using Symbol to create a unique key
// Symbols are often used to create unique property keys that won't conflict with other properties
// in an object, especially when you want to avoid name clashes in larger codebases.
const person = {
    name: "Akarsh",
    "full name": "Akarsh Jha", // Property with a space in the name
    age: 22,
    location: "India",
    email: "akarsh@gmail.com",
    isStudent: true,
    lastLoginDays: ["Monday", "saturday"],
    [mySum]: "mykey1"
};

console.log(person); // Logging the entire object
console.log(person.email); // Accessing property using dot notation
console.log(person["full name"]); // Accessing property with a space using bracket notation
console.log(person[mySum]); // Accessing property using Symbol key
console.log(person.lastLoginDays[0]); // Accessing the first element of the lastLoginDays array
console.log(person["email"]); // Accessing property using bracket notation

//freezing an object
Object.freeze(person); // Freezing the object to prevent modifications
// person.age = 23; // This line would throw an error in strict mode or silently
// person.location = "USA"; // This line would also not modify the object
console.log(person); // Logging the frozen object
// Checking if the object is frozen
console.log(Object.isFrozen(person)); // true - The object is frozen and cannot be modified
// Checking if the object is sealed
console.log(Object.isSealed(person)); // false - The object is not sealed, so properties can still be deleted
// Checking if the object is extensible
console.log(Object.isExtensible(person)); // false - The object is not extensible, meaning no new properties can be added

// Sealing an object
const sealedPerson = Object.seal(person); // Sealing the object to prevent adding or removing properties
// sealedPerson.age = 23; // This line would modify the age property

//function
person.greeting = function() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
}

person.greeting2 = function() {
    return `Hello, my name is ${this["full name"]} and I am ${this.age} years old.`;
}

console.log(person.greeting()); // Calling the greeting function
console.log(person.greeting2()); // Calling the greeting2 function
