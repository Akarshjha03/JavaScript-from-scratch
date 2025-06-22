const name = "Akarsh Jha";
const repo = 50

console.log(name + " has " + repo + " repositories.");

console.log(`${name} has ${repo} repositories.`); // Template literals

//New way to declare a string - by  using String constructor(object)
// This is not commonly used, but it is valid.
const newString = String("Hello, World!");
console.log(newString); // "Hello, World!"

console.log(newString.length); // 13 (length of the string)
console.log(newString.toUpperCase()); // "HELLO, WORLD!"
console.log(newString.toLowerCase()); // "hello, world!"
console.log(newString.indexOf("World")); // 7 (index of the substring "World")
console.log(charAt(2)); // "l" (character at index 2)

//Substring and slice methods
console.log(newString.substring(0, 5)); // "Hello" (substring from index 0 to 5)
console.log(newString.slice(0, 5)); // "Hello" (slice from index 0 to 5)

const anotherString = newString.slice(-2, 7); // "Hello, " (slice from index -2 to 7)
console.log(anotherString);
console.log(newString.split(" ")); // ["Hello,", "World!"] (split by space)

//Trim whitespace
const stringWithSpaces = "   Hello, World!   ";
console.log(stringWithSpaces); // "   Hello, World!   "
console.log(stringWithSpaces.trim()); // "Hello, World!" (removes leading and trailing spaces)

//String replacement
const originalString = "Hello, World!";
const replacedString = originalString.replace("World", "JavaScript");
console.log(replacedString); // "Hello, JavaScript!" (replaces "World" with "JavaScript")



