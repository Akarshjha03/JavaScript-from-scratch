// primitive types in javascript - uses stack memory
let myName = "akarsh"

let anothername = myName
console.log(anothername);

anothername = "jha"
console.log(anothername);
consolelog(myName);

// Reference types in javascript - uses heap memory
let user1 = {
    name: "Akarsh",
    age: 20
}

let user2 = user1;
console.log(user2)

user2.age = 22
console.log(user1);
console.log(user2);



