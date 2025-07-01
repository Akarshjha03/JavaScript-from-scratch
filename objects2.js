//literals
//const tinderUser = new Object(); // Creating an empty object using the Object constructor

const tinderUser = {}

tinderUser.name = "Akarsh Jha";
tinderuserId = 12345;
tinderUser.age = 22;
tinderUser.isLoggedIn = true;

console.log(tinderUser); // Logging the tinderUser object
console.log(tinderUser.name); // Accessing the name property

//Nested Objects
const regularUser = {
    email: "aj@gmail.com",
    fullname: {
        userFullName:{
            firstName: "Akarsh",
            lastName: "Jha"
        }
    }
}

console.log(regularUser); // Logging the regularUser object
console.log(regularUser.email); // Accessing the email property
console.log(regularUser.fullname.userFullName.firstName); // Accessing the firstName property of the nested object
console.log(regularUser.fullname.userFullName.lastName); // Accessing the lastName property of the nested object


// Merging multiple objects using Object.assign
// Object.assign() is used to copy the values of all enumerable own properties from one or more source objects to a target object. It returns the target object after copying the properties.
// This method is useful for merging objects or creating a new object with properties from multiple sources.
const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "a", 4:"b"}
const obj4 = {5: "a", 6:"b"}

const obj3 = Object.assign({}, obj1, obj2, obj4); // Merging multiple objects into a new object
console.log(obj3); // Logging the merged object

// Output: {1: "a", 2: "b", 3: "a", 4: "b", 5: "a", 6: "b"}

// Merging multiple objects using spread operator
// The spread operator (...) allows for a more concise syntax to merge objects. It spreads the properties of the source objects into a new object, effectively merging them.
const obj5 = {...obj1, ...obj2, ...obj4}; // Merging multiple objects using the spread operator
console.log(obj5); // Logging the merged object using spread operator


// Example of an array of objects
// An array of objects is a common data structure in JavaScript, where each object can represent an individual entity with its own properties. This structure is useful for managing collections of related data, such as
const User = [
    {
        name: "Akarsh",
        age: 22
    },
    {
        name: "Akarsh Jha",
        age: 22
    },
    {
        name: "Akarsh Jha",
        age: 22
    }
]

User[1].name
console.log(User[1].name); // Accessing the name property of the second object in the User array

// Example of an array of objects with a method
console.log(object.keys(tinderUser)); // Logging the keys of the tinderUser object
console.log(Object.values(tinderUser)); // Logging the values of the tinderUser object
console.log(Object.entries(tinderUser)); // Logging the key-value pairs of the tinderUser object
console.log(Object,hasownProperty.call(tinderUser, "name")); // Checking if the tinderUser object has a property named "name"