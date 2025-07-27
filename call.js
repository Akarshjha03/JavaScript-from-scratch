function setUsername(username){
    //complex db calls
    this.username = username;
    console.log(`called`)
}

function createUser(username,email, password){
    //complex db calls
    this.username = username;
    this.password = password;
    this.email = email;
}

const coffee = new createUser('akarsh', 'akarsh03@proton.me', "123")
console.log(coffee);