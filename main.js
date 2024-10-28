/*
    Create a project that simulates the game Portugal - France Quarter Finals Euro 2024

    Each match should have 90 minutes and each minute can have one of this events:

    - Portugal goal
    - France goal
    - Substitution
    - Foul
    - Yellow Card
    - Corner Kick

    At the end, we should see the final score

*/

min = 1;
max = 6;

randomNumber = 0;

i = 1;

while (i <= 90) {
    randomNumber = Math.floor(Math.random()*(max-min) + min); //how to generate random number between a min and max
    
    
    
    i++;


}

/*
    Create a project that simulates the game Portugal - France Quarter Finals Euro 2024

    Each match should have 90 minutes and each minute can have one of this events:

    - Portugal goal
    - France goal
    - Substitution
    - Foul
    - Yellow Card
    - Corner Kick

    At the end, we should see the final score

*/

min = 1;
max = 20;

randomNumber = 0;
portugalGoals = 0;
franceGoals = 0;
i = 1;

while (i <= 90) {
    randomNumber = Math.floor(Math.random()*(max-min) + min); //how to generate random number between a min and max
    
    if (randomNumber == 1) {
        console.log(i, "- Portugal scored!!!");
        portugalGoals++;
    } else if (randomNumber == 2) {
        console.log(i, "- France scored!!!");
        franceGoals++;
    } else if (randomNumber == 3) {
        console.log(i, "- Substitution");
    } else if (randomNumber == 4) {
        console.log(i, "- Foul");
    } else if (randomNumber == 5) {
        console.log(i, "- Yellow Card");
    } else if (randomNumber >= 6 && randomNumber <= 7) {
        console.log(i, "- Corner Kick");
    }
    
    i++;
}

console.log("France -", franceGoals, "Portugal -", portugalGoals)