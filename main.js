const choiceArray = ['rock', 'paper', 'scissors'];
/* get a random selection from the computer*/
function getComputerChoice() {
    let computerSelection = choiceArray[Math.floor(Math.random()*choiceArray.length)];
    return computerSelection;
}
/*prompt user to make a choice for the game*/
function getUserChoice() {
    return prompt("Make a choice: rock, paper, or scissors?")
}
/*determine if user or computer wins by comparing the selections made and return a string describing the win/lost/draw*/
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
/*function to play 5 rounds of rock paper scissors*/
function playGame() {
    let counter = 0;
    let userWinCount = 0;
    let computerWinCount = 0;
    const rockBtn = document.querySelector('#rock');
    const paperBtn = document.querySelector('#paper');
    const scissorsBtn = document.querySelector('#scissors');
    rockBtn.addEventListener('click', () => {
        let playerSelection = rockBtn.textContent;
        let computerSelection = getComputerChoice();
        let round = playRound(computerSelection, playerSelection);
        console.log(round);
    })
    //while (counter < 5) {
        //let computerSelection = getComputerChoice();
        //let playerSelection = getUserChoice();
        //let round = playRound(computerSelection, playerSelection);
        //console.log(round)
        //counter += 1;
        //if (round.slice(4,7) == 'win') {
            //userWinCount += 1;
        //} else if (round.slice(4,7) == 'los') {
            //computerWinCount += 1;
        //}
    //}
    //console.log('The final score after 5 rounds is You ' + userWinCount + ' : ' + computerWinCount + ' Computer');
}

console.log(playGame())