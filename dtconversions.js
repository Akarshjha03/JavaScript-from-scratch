let score = "33" // can also try with true, undefined, null, "33abc, "aj".
console.log(typeof score); // string

let valueInNumber = Number(score) // Convert string to number
console.log(typeof valueInNumber) // number
console.log(valueInNumber) // 33

let isStudent = "akarsh"; // boolean    
let booleanisStudent = Boolean(isStudent); // Convert string to boolean
console.log(booleanisStudent); // boolean

// 1 -> true
// 0 -> false
//"" -> false
// "akarsh" -> true

let someNumber = 23
let newNumber = String(someNumber)
console.log(typeof newNumber)
console.log(newNumber) // "23"


