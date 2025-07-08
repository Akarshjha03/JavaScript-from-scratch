//Basic syntax
for(let i = 0; i < 5; i++){
    console.log("Iteration number: " + i);
}

for(let i = 0; i < 50; i++){
    const element = i;
    if(element == 25){
        console.log("25 is found, this is the best number.");
    }
    console.log(element);
}

for(let i = 0; i < 10; i++){
    console.log(`outer loop value: ${i}`);
    for(let j = 0; j < 5; j++){
        //console.log(`\tinner loop value: ${j}`);
        console.log(i + "*" + j + " = " + (i * j));
    }
}

let myArray = [1, 2, 3, 4, 5];
console.log(myArray.length); // Output: 5
for(let i = 0; i < myArray.length; i++){
    const element = myArray[i];
    console.log(element);
}

//Break and continue statements
for(let i = 0; i < 10; i++){
    if(i == 5){
        console.log("Breaking the loop at i = " + i);
        break; // Exits the loop when i is 5
    }
    console.log("Current value of i: " + i);
}

for(let i = 0; i < 10; i++){
    if(i == 5){
        console.log("Skipping the iteration at i = " + i);
        continue; // Skips the current iteration when i is 5
    }
    console.log("Current value of i: " + i);
}