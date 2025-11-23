//console.log("Hello, World!");

//Gets the computers choice by using a random integer generator
function getComputerChoice() {
    //We have three choices: rock, paper, scissors 
    let choiceNum = Math.floor(Math.random()*3);
    
    //0:Rock, 1:Paper, 2:Scissors
    if(choiceNum == 0) {
        return "rock";
    } else if (choiceNum == 1) {
        return "paper";
    } else {
        return "scissors"
    }
}

//The function for human choice
function getHumanChoice() {
    let choice = prompt("Rock, paper or scissors:");
    let isValid = true;
    while(isValid) {
        //considering the uppercases 
        lowercaseChoise = choice.toLowerCase();
        if(lowercaseChoise == "rock" || lowercaseChoise == "paper" || lowercaseChoise == "scissors") {
            return lowercaseChoise;
        }else {
            choice = prompt("Invalid choice. Enter again:");
        }
    }
}

console.log(getComputerChoice())
humanChoice = getHumanChoice()
console.log(humanChoice)