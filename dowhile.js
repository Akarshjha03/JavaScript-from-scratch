let score = 1;
do{
    console.log("Current score is: " + score);
    score++;
}while(score <= 5); // The loop will run at least once even if the condition is false initially

score = 11;
do{
    console.log("Current score is: " + score);
    score++;
}while(score <= 5); // The loop will not run because the condition is false, but it will execute at least once