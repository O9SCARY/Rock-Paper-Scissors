const choices = ["rock" , "paper", "scissors"]

let humanScore = 0
let computerScore = 0

function getComputerChoice(){

    let index = Math.floor(Math.random() * 3)   
    let computerChoice = choices[index]
    return computerChoice
}


function getHumanChoice(){
    let humanChoice = prompt("Rock , Paper or Scissors?").trim().toLowerCase()
    return humanChoice
}

function playRound(human , computer){

    if(human === "rock" && computer == "paper"){
        computerScore += 1
        return `You LOSE!`
    }
    else if(human === "rock" && computer === "scissors"){
        humanScore += 1
        return `You WIN!`
    }
    else if(human === "rock" && computer === "rock"){
        return `You DRAW!`
    }

    else if(human === "paper" && computer == "scissors"){
        computerScore += 1
        return `You LOSE!`
    }
    else if(human === "paper" && computer === "rock"){
        humanScore += 1
        return `You WIN!`
    }
    else if(human === "paper" && computer === "paper"){
        return `You DRAW!`
    }

    else if(human === "scissors" && computer == "rock"){
        computerScore += 1
        return `You LOSE!`
    }
    else if(human === "scissors" && computer === "paper"){
        humanScore += 1
        return `You WIN!`
    }
    else if(human === "scissors" && computer === "scissors"){
        return `You DRAW!`
    }
} 

const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()

function playGame(){
    for(i = 0; i < 5; i++){
        const humanSelection = getHumanChoice()
        const computerSelection = getComputerChoice()

        console.log(playRound(humanSelection, computerSelection))
    }
    console.log(`Computer Score: ${computerScore}`);
    console.log(`Human Score: ${humanScore}`);

    
}


playGame()

