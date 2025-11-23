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

let humanScore = 0;
let computerScore = 0;
//game logic function: scissors beats paper, paper beats rock, rock beats scissors
function playRound(humanChoice, computerChoice) {
    let humanWin = (humanChoice == "rock" && computerChoice == "scissors") ||
                    (humanChoice == "paper" && computerChoice == "rock") ||
                    (humanChoice == "scissors" && computerChoice == "paper");

    let computerWin = (computerChoice == "rock" && humanChoice == "scissors") ||
                        (computerChoice == "paper" && humanChoice == "rock") ||
                        (computerChoice == "scissors" && humanChoice == "paper");

    if(humanWin) {
        let resultMessage = "You win! " + humanChoice + " beats " + computerChoice + ".";
        console.log(resultMessage);
        humanScore++;
    }

    if(computerWin) {
        let resultMessage = "You lose! " + computerChoice + " beats " + humanChoice + ".";
        console.log(resultMessage);
        computerScore++;
    }

    //Draw condition
    if(!humanWin && !computerWin){
        console.log("It is draw. No one gets a score.");
    }
}

function playGame() {
    for(let i=0; i < 5; i++) {
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
        playRound(humanChoice, computerChoice);
    }    

    if(humanScore > computerScore){
        console.log("Congrats! You won!");
    } else if(humanScore < computerScore) {
        console.log("Sorry! You lose.");
    } else {
        console.log("Your score: " + humanScore + "\n");
        console.log("Computer's score: " + computerScore + "\n");
        console.log("It's a draw.");
    }
}

playGame();