const myArr = [1, 2, 3, 4, 5];

console.log(myArr); // [1, 2, 3, 4, 5]

//different ways to create an array
const arr1 = new Array(1, 2, 3, 4, "Mr. X", true, null, undefined);
console.log(arr1); // [1, 2, 3, 4, 5, "Mr. X", true, null, undefined]

//Methods on arrays
const arr2 = [1, 2, 3, 4, 5];
console.log(arr2.length); // 5 - Length of the array
console.log(arr2[0]); // 1 - Accessing the first element of the array
console.log(arr2[arr2.length - 1]); // 5 - Accessing the last element of the array
console.log(arr2.indexOf(3)); // 2 - Index of the element 3 in the array
console.log(arr2.includes(4)); // true - Checking if the array includes the element

myArr.push(6); // Adding an element to the end of the array
myArr.push(7, 8); // Adding multiple elements to the end of the array
myArr.pop(); // Removing the last element from the array
console.log(myArr); // [1, 2, 3, 4, 5, 6, 7]

myArr.unshift(9); // Adding an element to the beginning of the array
console.log(myArr); // [9, 1, 2, 3, 4, 5, 6, 7]
myArr.shift(); // Removing the first element from the array
console.log(myArr); // [1, 2, 3, 4, 5, 6, 7]

//Convert array to string
const arr = myArr.join();
console.log(arr); // "1,2,3,4,5,6,7" - Convert array to string




