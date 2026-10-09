function getComputerChoice(){
    const choices = ["rock" , "paper", "scissors"]

    index = Math.floor(Math.random() * 3)   
    let computerChoice = choices[index]
    return computerChoice
}

console.log(getComputerChoice());
