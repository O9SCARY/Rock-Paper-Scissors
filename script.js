const choices = ["rock" , "paper", "scissors"]
function getComputerChoice(){

    index = Math.floor(Math.random() * 3)   
    let computerChoice = choices[index]
    return computerChoice
}

console.log(getComputerChoice());


function getHumanChoice(){
    let humanChoice = prompt("Rock , Paper or Scissors?")
    return humanChoice
}

const humanScore = 0
const computerScore = 0