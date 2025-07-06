//if-else
const isuserLoggedIn = true;
if (isuserLoggedIn) {
    console.log("Welcome back, user!");
} else {
    console.log("Please log in to continue.");
}

//if
const balance = 1000;
if (balance > 500) console.log("You have sufficient balance."), console.log("You can proceed with the transaction.");

//else if
const age = 20;
if (age < 13) {
    console.log("You are a child.");
} else if(age < 19) {
    console.log("You are a teenager.");
}
else if(age < 65) {
    console.log("You are an adult.");
}
else {
    console.log("You are a senior citizen.");
}

//logical operators

const userloggedIn = true;
const debitcard = true;
const loggedinfromgoogle = false;
const loggedinfromfacebook = true;

if(userloggedIn && debitcard && 2 == 3) {
    console.log("You can proceed with the transaction.");
}
if(loggedinfromfacebook || loggedinfromgoogle) {
    console.log("You are logged in from a social media account.");
}

//switch case
const day = 3;
switch(day){
    case 1:
        console.log("Today is Monday.");
        break;
    case 2:
        console.log("Today is Tuesday.");
        break;
    case 3:
        console.log("Today is Wednesday.");
        break;
    case 4:
        console.log("Today is Thursday.");
        break;
    case 5:
        console.log("Today is Friday.");
        break;
    case 6:
        console.log("Today is Saturday.");
        break;
    case 7:
        console.log("Today is Sunday.");
        break;
    default:
        console.log("Invalid day number. Please enter a number between 1 and 7.");
        break;
}

//truthy and falsy values - some values are considered as true and false already in JS
const useremail = []; //or aj@gmail.com
if(useremail) {
    console.log("Email is provided.");
}
else {
    console.log("Email is not provided.");
}

//falsy values
//false, 0, "", null, undefined, NaN, -0, BigInt(0), BigInt(-0)

//truthy values
//true, 1, "0", "false", [], {}, " ", BigInt(1), BigInt(0), BigInt(-1), [], {}, function() {}, Symbol(), new Date(), Infinity, -Infinity

//nullish coalescing operator
let val1;
val1 = 5 ?? 10; // If val1 is null or undefined, it will be assigned 10
console.log(val1); // Output: 5

let val2;
val2 = null ?? 10; // If val2 is null or undefined, it will be assigned 10
console.log(val2); // Output: 10

let val3 = null ?? 20 ?? 30; // If val3 is null or undefined, it will be assigned 20, then 30
console.log(val3); // Output: 20

//Ternary operator
const iceteaprice = 50;
iceteaprice < 50 ? console.log("Ice tea is affordable.") : console.log("Ice tea is expensive.");

