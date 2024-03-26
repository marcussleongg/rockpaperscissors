const choiceArray = ['rock', 'paper', 'scissors'];
/* get a random selection from the computer*/
function getComputerChoice() {
    let computerSelection = choiceArray[Math.floor(Math.random()*choiceArray.length)];
    console.log(computerSelection);
}
getComputerChoice();
/*prompt user to make a choice for the game*/
let playerSelection = prompt("Make a choice: rock, paper, or scissors?")
