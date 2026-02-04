let humanScore = 0;
let computerScore = 0;

const btn = document.querySelectorAll("#game-button");

btn.forEach(button => {
    button.addEventListener('click', function() {
        //console.log(button.textContent);
        playGame(button.textContent);
        
    })
})

//Button disablement
function gameOver() {
    btn.forEach(button => {
        button.disabled = true;
    })
}

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

function playGame(humanChoice) {
    
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    if(humanScore == 5 || computerScore == 5) {
        if(humanScore > computerScore) {
            console.log("Human won!");            
        } else {
            console.log("Computer won!");
        }
        gameOver();
    } 

    console.log("Your score: " + humanScore + "\n");
    console.log("Computer's score: " + computerScore + "\n");
}



//playGame();