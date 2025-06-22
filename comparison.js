//Basics
console.log(2 < 1)// false
console.log(2 > 1)// true
console.log(2 <= 1) // false
console.log(2 >= 1) // true  
console.log(2 == 1) // false
console.log(2 != 1) // true

//important
console.log("2" > 1) // true (string "2" is converted to number)
console.log("02" < 1) // false (string "2" is converted to number)
console.log("2" == 2) // true (string "2" is converted to number)

//null issues
console.log(null > 0) // false (null is converted to 0)
console.log(null == 0) // false (null is converted to 0)
console.log(null >= 0) // true (null is converted to 0)

//strict comparison
console.log("2" === 2) // false (strict comparison, no type conversion)
console.log("2" !== 2) // true (strict comparison, no type conversion)

//undefined issues
console.log(undefined > 0) // false (undefined is not a number)
console.log(undefined < 0) // false (undefined is not a number)
console.log(undefined == 0) // false (undefined is not a number)


