//for in loop - This loop is used to iterate over the properties of an object.
// It is not recommended to use this loop on arrays or other iterable objects.
const myobject = {
    js: "JavaScript",
    py: "Python",
    rb: "Ruby"
};

for (const i in myobject) {
    console.log(i);
}

for (const i in myobject) {
    console.log("Key: " + i + ", Value: " + myobject[i]);
}

//On Arrays
const fruits = ["apple", "banana", "cherry"];

for (const i in fruits) {
    console.log("Index: " + i + ", Value: " + fruits[i]);
}