//Hoisting- is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compile phase.
// This means that you can use variables and functions before they are declared in the code.
// Hoisting applies to variable declarations (using var) and function declarations, but not to let/const variables or function expressions.

// Example of non-hoisting
addone(5); 
function addone(num) {
    return num +1;
}
console.log(addone(5)); // 6

// Example of hoisting with function declarations

//addtwo(5); //ReferenceError: Cannot access 'addtwo' before initialization
const addtwo = function(num) {
    return num + 2;
}
console.log(addtwo(5));