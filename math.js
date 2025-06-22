console.log(Math);

console.log(Math.PI); // 3.141592653589793 (value of PI)
console.log(Math.E); // 2.718281828459045 (value of Euler's number)
console.log(Math.abs(-5)); // 5 (absolute value)
console.log(Math.ceil(4.2)); // 5 (rounds up to the nearest integer)
console.log(Math.floor(4.8)); // 4 (rounds down to the nearest integer)
console.log(Math.round(4.5)); // 5 (rounds to the nearest integer)
console.log(Math.max(1, 2, 3)); // 3 (maximum value
console.log(Math.min(1, 2, 3)); // 1 (minimum value)
console.log(Math.random()); // Random number between 0 and 1
console.log(Math.sqrt(16)); // 4 (square root)
console.log(Math.pow(2, 3)); // 8 (2 raised to the power of 3)
console.log(Math.log(10)); // 2.302585092994046 (natural logarithm of 10)
console.log(Math.log10(100)); // 2 (base-10 logarithm of 100)
console.log(Math.sin(Math.PI / 2)); // 1 (sine of 90 degrees)
console.log(Math.cos(0)); // 1 (cosine of 0 degrees)
console.log(Math.tan(Math.PI / 4)); // 1 (tangent of 45 degrees)
console.log(Math.asin(1)); // 1.5707963267948966 (inverse sine of 1)
console.log(Math.acos(1)); // 0 (inverse cosine of 1)

console.log(Math.random() * 10) // Random number shifting digits
console.log(Math.floor(Math.random() * 10) +1 ); 

// Random integer between 10 and 20
const min = 10;
const max = 20;
const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomInt); // Random integer between 10 and 20