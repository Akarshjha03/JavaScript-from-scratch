//slice and splice
const arr = [1, 2, 3, 4, 5];
console.log(arr.slice(1, 3)); // [2, 3] - Extracts elements from index 1 to index 3 (exclusive)
console.log(arr.slice(1)); // [2, 3, 4, 5] - Extracts elements from index 1 to the end of the array
console.log(arr.slice(-2)); // [4, 5] - Extracts the last two elements of the array
console.log(arr.slice(1, -1)); // [2, 3, 4] - Extracts elements from index 1 to the second last element
console.log(arr.slice()); // [1, 2, 3, 4, 5] - Creates a shallow copy of the array

console.log(arr.splice(1, 2)); // [2, 3] - Removes elements from index 1 and returns them
console.log(arr); // [1, 4, 5] - The original array is modified
console.log(arr.splice(1, 0, 2, 3)); // [] - Inserts elements 2 and 3 at index 1 without removing any elements
console.log(arr); // [1, 2, 3, 4, 5] - The original array is modified

const marvelHeroes = ["ironman", "hulk", "thor", "spiderman"];
const dcHeroes = ["batman", "superman", "flash", "aquaman"]

marvelHeroes.push(dcHeroes);
console.log(marvelHeroes); // ["ironman", "hulk", "thor", "spiderman", ["batman", "superman", "flash", "aquaman"]]
console.log(marvelHeroes[4][0]); // "batman" - Accessing the first element of the nested array
console.log(marvelHeroes[4][1]); // "superman" - Accessing the second element of the nested array
console.log(marvelHeroes[4][2]); // "flash" - Accessing the third element of the nested array

//concate or merge arrays
const allHeroes = marvelHeroes.concat(dcHeroes);
console.log(allHeroes); // ["ironman", "hulk", "thor", "spiderman", "batman", "superman", "flash", "aquaman"]


// Using spread operator to merge arrays
const allHeroesSpread = [...marvelHeroes, ...dcHeroes];
console.log(allHeroesSpread); // ["ironman", "hulk", "thor", "spiderman", "batman", "superman", "flash", "aquaman"]

const anotherArr = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11]]];
const real_arr = anotherArr.flat(2); // Flattening the array to a depth of 2
console.log(real_arr); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] - Flattened array

//Converting string to array
console.log(Array.isArray("Hello")); // false - "Hello" is not an array
console.log(Array.from("Hello")); // ["H", "e", "l", "l", "o"] - Converting string to array

console.log(Array.from({name: "Akarsh", age: 20})); // ["name", "age"] - Converting object keys to array
console.log(Array.from({0: "Akarsh", 1: "Jha", length: 2})); // ["Akarsh", "Jha"] - Converting array-like object to array

let score1 = 100
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // [100, 200, 300] - Creating an array from individual elements