"use strict"; // for using new features like let and const
let value = 3
let negvalue = -value
console.log(negvalue)

console.log(2+2) // 4
console.log(2-2) // 0
console.log(2*2) // 4
console.log(2/2) // 1
console.log(2%2) // 0
console.log(2**2) // 4

let str1 = "AKARSH"
let str2 = "Jha"
let str3 = str1 + " " + str2 // Concatenation
console.log(str3) // "AKARSH Jha"

// VERY IMPORTANT
console.log("1" + 2) // "12" (string concatenation)
console.log(1 + "2") // "12" (string concatenation)
console.log("1" + "2") // "12" (string concatenation)
console.log(1 + 2) // 3 (number addition)
console.log("1" - 2) // -1 (string to number conversion)

console.log("1" + 2 + 3) // "123" (string concatenation
console.log(1 + 2 + "3") // "33" (number addition then string concatenation)