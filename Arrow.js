//Arrow Function - is is the shorter way to write a function

//Regular Function
function add(a, b) {
  return a + b;
}

//arrow function
const addArrow = (a, b) => {
  return a + b;
}
//or even shorter
const addArrowShort = (a, b) => a + b;

//Points
// 1. Arrow functions do not have their own 'this' context, they inherit 'this' from the parent scope.
// 2. They cannot be used as constructors (i.e., you cannot use 'new' with them).
// 3. They do not have the 'arguments' object, so you cannot access the arguments passed to them like you can in regular functions.
// 4. They cannot be used as generator functions (i.e., you cannot use 'yield' with them).
// 5. They are always anonymous, meaning they do not have a name.
// 6. They are not hoisted, meaning you cannot call them before they are defined in the code.
// 7. They are more concise and easier to read, especially for simple functions.
// 8. They are often used for callbacks and functional programming patterns.
