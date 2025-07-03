//scope are of 2 types: global and local
//global scope is the default scope
//local scope is created by functions, classes, and modules
let  a = 300;
if(true) {
    let a = 100;
    const b = 200;
    console.log("INNER:", a); // 100
    console.log(b); // 200
}

console.log("OUTER:", a); // 300

//Nested scopes
function one(){
    const username = "Akarsh"

    function two(){
        const website = "akarsh.me"
        console.log("Username:", username); // Akarsh
    }
    //console.log("Website:", website); // ReferenceError: website is not defined
    two();
}
one(); // Username: Akarsh

//Practice
if(true) {
    const username = "Akarsh"
    if(username === "Akarsh") {
        const website = "akarsh.me"
        console.log("Username:", username); // Akarsh
        console.log("Website:", website); // akarsh.me
    }
    //console.log("Website:", website); // ReferenceError: website is not defined - out of scope
}
//console.log("Username:", username); // ReferenceError: username is not defined - out of scope

