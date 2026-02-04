let humanScore = 0;
let computerScore = 0;

let humanScoreElem = document.querySelector("#human-score");
let computerScoreElem = document.querySelector("#computer-score");

let humanChoiceSymbol = document.querySelector("#player-choice"); 
let computerChoiceSymbol = document.querySelector("#computer-choice");

let gameMessage = document.querySelector("#game-message")

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

//game logic function: scissors beats paper, paper beats rock, rock beats scissors
function playRound(humanChoice, computerChoice) {
    humanChoiceSymbol.textContent = humanChoice;
    computerChoiceSymbol.textContent = computerChoice;

    let humanWin = (humanChoice == "rock" && computerChoice == "scissors") ||
                    (humanChoice == "paper" && computerChoice == "rock") ||
                    (humanChoice == "scissors" && computerChoice == "paper");

    let computerWin = (computerChoice == "rock" && humanChoice == "scissors") ||
                        (computerChoice == "paper" && humanChoice == "rock") ||
                        (computerChoice == "scissors" && humanChoice == "paper");

    if(humanWin) {
        let resultMessage = "You win!"
        gameMessage.textContent = resultMessage;
        humanScore++;
        humanScoreElem.textContent = humanScore;
    }

    if(computerWin) {
        let resultMessage = "You lost!";
        gameMessage.textContent = resultMessage;
        computerScore++;
        computerScoreElem.textContent = computerScore;
    }

    //Draw condition
    if(!humanWin && !computerWin){
        gameMessage.textContent = "It is draw. No one gets a score.";
    }
}

function playGame(humanChoice) {    
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    if(humanScore == 5 || computerScore == 5) {
        if(humanScore > computerScore) {
            gameMessage.textContent = "Congratulations! You won! If you want to play again, please refresh the page.";            
        } else {
            gameMessage.textContent = "Sorry! You lost! If you want to play again, please refresh the page.";
        }
        gameOver();
    } 
}



