//literal object
const user = {
    name: "Akarsh",
    age: 22,
    logincount: 23,
    isLoggedIn: true,


    getUserDetails:  function () {
        console.log(`Got user details: ${this.name}, ${this.age}`);
        console.log(`User name is ${this.name} and age is ${this.age}`);
    }
};

//Constructor function
function User(name, age) {
    this.name = name;
    this.age = age;
    this.logincount = 0;
    this.isLoggedIn = false;

    return this;
}

const user1 = new User("Akarsh", 22);
console.log(user1); // Output: User { name: 'Akarsh', age: 22, logincount: 0, isLoggedIn: false }