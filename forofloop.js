//for of loop - This loop is used to iterate over iterable objects like arrays, strings, maps, sets, etc.
// It is a more modern way to loop through collections in JavaScript.
//This does not work on objects, for that we use for in loop
const fruits = ["apple", "banana", "cherry"];
for (const i of fruits) {
    console.log("Current fruit is: " + i);
}

//loop on maps
const map = new Map();
map.set('IN', 'India');
map.set('US', 'United States');
map.set('UK', 'United Kingdom');
map.set('CA', 'Canada');

for(const i of map) {
    console.log(i); // This will log each key-value pair as an array [key, value]
}

//OR

for (const [key, value] of map) {
    console.log(`Key: ${key}, Value: ${value}`); // This will log each key-value pair in a more readable format
}