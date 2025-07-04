//immediate invoked function expression
// This is a self-contained module that runs immediately
// and does not pollute the global scope.
//()() 1st is function inside parenthesis and 2nd is the function call

//Named IIFE - regular function inside parenthesis
(function() {
    console.log("This is an IIFE (Immediately Invoked Function Expression)");
})();

//Anonymous IIFE - arrow function inside parenthesis
(() => {
    console.log("This is an IIFE (Immediately Invoked Function Expression) using arrow function");
})();

