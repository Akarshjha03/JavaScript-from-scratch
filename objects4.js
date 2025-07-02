//destructuring in objects

const course = {
    title: "JavaScript Basics",
    duration: 4,
    courseinstructor: "John Doe"
}
//course.courseInstructor {oldways}

const {courseinstructor : instructor} = course; // Destructuring to extract the courseinstructor property from the course object, by changing its name to instructor
console.log(instructor); // Logging the extracted instructor property

//API & JSON
// API (Application Programming Interface) is a set of rules and protocols for building and interacting with
// software applications. It allows different software systems to communicate with each other, enabling data exchange and functionality sharing.
// JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy to read and write for humans and machines. It is often used in APIs to transmit data between a server and a client.
// JSON is a text format that is completely language-independent, making it a popular choice for data exchange in web applications.

// Example of a JSON object
const jsonObject = {
    "name": "Akarsh Jha",
    "age": 22,
    "email": "aj@gmail.com"
}
// JSON objects are similar to JavaScript objects but are represented as strings when transmitted over networks.
// JSON can be parsed into JavaScript objects using JSON.parse() and can be converted back to JSON strings using JSON.stringify().

//sometimes we get api not in JSON but in array of objects format
const apiResponse = [
    {
        "id": 1,
        "title": "JavaScript Basics",
        "duration": 4,
        "courseinstructor": "John Doe"
    },
    {
        "id": 2,
        "title": "Python Basics",
        "duration": 5,
        "courseinstructor": "Jane Smith"
    }
];
