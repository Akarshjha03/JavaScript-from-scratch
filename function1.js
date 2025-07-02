//function - used for code reusability and modularity
// A function is a reusable block of code that performs a specific task. It can take inputs
// (parameters) and return an output. Functions help in organizing code, making it more readable and maintainable.
function sayMyName(){
    return "Akarsh Jha";
}

console.log(sayMyName()); // Calling the function sayMyName and logging its return value
// Functions can also take parameters to make them more dynamic and reusable.
function greet(name) {  
    return `Hello, ${name}!`; // Returns a greeting message with the provided name
}
console.log(greet("Akarsh")); // Calling the greet function with "Akarsh" as an argument and logging the result

function add(a, b) {
    return a + b; // Returns the sum of two numbers a and b
}

const result = add(5, 10); // Calling the add function with 5 and 10 as arguments
console.log(result); // Logging the result of the addition, which is 15


// Functions can also return other functions, allowing for higher-order functions.
function multiplyBy(factor) {
    return function(num) {
        return num * factor; // Returns a function that multiplies the input num by the factor
    };
}

// Functions can also have default parameters, which are used if no argument is provided.
function greetWithDefault(name = "Guest") {
    return `Hello, ${name}!`; // Returns a greeting message with the provided name or "Guest" if no name is given
}
console.log(greetWithDefault()); // Calling the function without an argument, it will use the default value "Guest"

function loginUserMesssage(username = "Guest") {
    if(!username) {
        return "Please enter a valid username"; // Returns an error message if no username is provided
    }
    return `Welcome back, ${username}!`; // Returns a welcome message with the provided username
}

console.log(loginUserMesssage("Akarsh")); // Calling the function with a username