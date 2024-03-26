const choiceArray = ['rock', 'paper', 'scissors'];
/* get a random selection from the computer*/
function getComputerChoice() {
    let computerSelection = choiceArray[Math.floor(Math.random()*choiceArray.length)];
    console.log(computerSelection);
}
getComputerChoice();
/*prompt user to make a choice for the game*/
let playerSelection = prompt("Make a choice: rock, paper, or scissors?")
/*determine if user or computer wins by comparing the selections made*/
function playRound(computerSelection, playerSelection) {
    if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'rock') {
        return "It's a draw! Rock and Rock is a draw"
    } else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'paper') {
        return "You lose! Paper beats Rock"
    } else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors') {
        return "You win! Rock beats Scissors"
    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock') {
        return "You win! Paper beats Rock"
    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'paper') {
        return "It's a draw! Paper and Paper is a draw"
    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'scissors') {
        return "You lose! Scissors beats Paper"
    } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'rock') {
        return "You lose! Rock beats Scissors"
    } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'paper') {
        return "You win! Scissors beats Paper"
    } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'scissors') {
        return "It's a draw! Scissors and Scissors is a draw"
    }
}