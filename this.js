//This- when we want to refer the current context of the function, we use 'this' keyword.
// 'this' refers to the object that is executing the current function.
// In a method, 'this' refers to the owner object.

// In a function, 'this' refers to the global object (window in browsers, global in Node.js).
// In an event handler, 'this' refers to the element that triggered the event.
// In a constructor, 'this' refers to the newly created object.
// In arrow functions, 'this' is lexically bound, meaning it takes 'this' from the surrounding code.
// In strict mode, 'this' is undefined in functions that are not methods of an object


// Example of 'this' in a local context(scope)
const user = {
    username: 'Akarsh',
    age: 22,

    welcomeMessage: function() {
        console.log(`Welcome ${this.username}, you are ${this.age} years old.`);
    }
}

user.welcomeMessage(); // Welcome Akarsh, you are 22 years old.

// Example of 'this' in a global context
console.log(this); // In browsers, this refers to the window object
//here its {} or undefined in strict mode

//this can be used inside objects only not in functions
function chai(){
    let username = 'Akarsh';
    console.log(this)
    console.log(`Welcome ${this.username}`); // undefined, because 'this' refers to the global object, not the function scope
}
chai(); // undefined, because 'this' refers to the global object, not the function scope


