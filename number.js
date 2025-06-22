const score = 400
console.log(score); // 400

const balance = new Number(100);
console.log(balance); // [Number: 100]

console.log(balance.toString().length); // 3 (length of the string representation of the number)
console.log(balance.toFixed(2)); // "100.00" (fixed-point notation with 2 decimal places)
console.log(balance.toExponential(2)); // "1.00e+2" (exponential notation with 2 decimal places)

const othernum = 123.44567
console.log(othernum.toPrecision(4)); // 124 (precision of 4 digits)
console.log(othernum.toFixed(2)); // "123.45" (fixed-point notation with 2 decimal places)

//count hundreds

const hundreds = 1000000;
console.log(hundreds.toLocaleString()); // "1,000,000" (formatted with commas for thousands)
console.log(hundreds.toLocaleString('en-IN')); // "10,00,000" (formatted with commas for thousands in india locale)