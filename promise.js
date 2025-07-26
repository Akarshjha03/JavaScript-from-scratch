//promise - the promise object represents the eventual completion (or failure) of an asynchronous operation
//and its resulting value.

const promiseOne = new Promise(function (resolve, reject) {
    setTimeout( function () {
        resolve("Promise resolved successfully!");
    }, 2000);
});

promiseOne.then(function (message) {
    console.log(message); // Output: Promise resolved successfully!
}).catch(function (error) {
    console.error("Promise rejected with error:", error);
});

//Promise - this is used to handle asynchronous operations

//This is using an arrow function to create a promise
const promiseTwo = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise Two resolved successfully!");
    }, 2000);
});

promiseTwo.then((message) => {
    console.log(message); // Output: Promise Two resolved successfully!
}).catch((error) => {
    console.error("Promise Two rejected with error:", error);
});

//Promise.all - this is used to handle multiple promises concurrently

//Data passing in resolve
const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ data: "Data from Promise Three" });
    }, 2000);
}); 

promiseThree.then((result) => {
    console.log(result.data); // Output: Data from Promise Three
}).catch((error) => {
    console.error("Promise Three rejected with error:", error);
});

//Promise chaining - this is used to handle multiple asynchronous operations in sequence
const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("First step completed");
    }, 2000);
});
promiseFour
    .then((message) => {
        console.log(message); // Output: First step completed
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("Second step completed");
            }, 2000);
        });
    })
    .then((message) => {
        console.log(message); // Output: Second step completed
    })
    .catch((error) => {
        console.error("Error in promise chain:", error);
    })
    .finally(() => {
        console.log("All promises completed.");
    });

//Promise with async/await - this is used to write asynchronous code in a synchronous style
const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve("Async/Await Promise resolved!");
        }else{  
            reject("Async/Await Promise rejected!");
        }
    }, 2000)
});

async function consumePromiseFive(){
    const response = await promiseFive;
    console.log(response); // Output: Async/Await Promise resolved!
}
consumePromiseFive().catch((error) => {
    console.error(error); // Output: Async/Await Promise rejected!
});