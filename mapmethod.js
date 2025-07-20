//Map - This is also a inbuild array method
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map((num) => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
// The map method creates a new array populated with the results of calling a provided function on every element in the calling array.
// It does not modify the original array and can be chained with other array methods.
// Example with normal function
function double(num) {
    return num * 2;
}

//Chaining - Chaining means calling multiple methods one after another, directly on the result of the previous one — in a single statement.
//in the follow-up method, we will get modified array

const mynums = [1, 2, 3, 4, 5];
const mydoubled = mynums.map(double).filter((num) => num > 5);
console.log(mydoubled); // Output: [6, 8, 10]