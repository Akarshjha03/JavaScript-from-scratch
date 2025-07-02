//Rest operator: same as spread operator but used in function parameters to collect all remaining arguments into an array.
function sumAll(...numbers) {
    return numbers; // Sums all numbers passed as arguments
}
console.log(sumAll(1, 2, 3, 4, 5)); // all the values are reurned as an array [1, 2, 3, 4, 5]

//Function with objects:
const user ={
    username: "Akarsh",
    prices: 199
}

function displayUserInfo({ anyobject }) {
    return `Username: ${anyobject.username}, Price: ${anyobject.prices}`; // Returns a string with user information
}

displayUserInfo({ anyobject: user }); // Calling the function with an object containing user information
console.log(displayUserInfo({ anyobject: user })); // Logging the result of the function call

// displayUserInfo({
//     username: "sam",
//     prices: 299
// }); // Calling the function with another object containing user information

const myNewArray = [200, 400, 100, 600, 300];

function returnSecondValue(getArray){ //getArray is the parameter that will receive an array
    return getArray[1]; // Returns the second value of the provided array
}

console.log(returnSecondValue(myNewArray)); // Calling the function with myNewArray and logging the second value, which is 400