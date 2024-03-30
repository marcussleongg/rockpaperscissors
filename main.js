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
    if (playerSelection == 'rock' && computerSelection == 'rock') {
        return "It's a draw! Rock and Rock is a draw"
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        return "You lose! Paper beats Rock"
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return "You win! Rock beats Scissors"
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return "You win! Paper beats Rock"
    } else if (playerSelection == 'paper' && computerSelection == 'paper') {
        return "It's a draw! Paper and Paper is a draw"
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return "You lose! Scissors beats Paper"
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return "You lose! Rock beats Scissors"
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return "You win! Scissors beats Paper"
    } else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
        return "It's a draw! Scissors and Scissors is a draw"
    }
}
/*function to play rounds of rock paper scissors until user or computer reaches score of 5*/
function playGame() {
    let userWinCount = 0;
    let computerWinCount = 0;
    const rockBtn = document.querySelector('#rock');
    const paperBtn = document.querySelector('#paper');
    const scissorsBtn = document.querySelector('#scissors');
    const div = document.createElement("div");
    const body = document.querySelector("body");
    body.appendChild(div);
    const resultDiv = document.createElement("div");
    body.appendChild(resultDiv);
    resultDiv.textContent = `You ${userWinCount} : ${computerWinCount} Computer`;
    rockBtn.addEventListener('click', () => {
        let playerSelection = rockBtn.textContent;
        let computerSelection = getComputerChoice();
        let round = document.createElement("p");
        round.textContent = playRound(computerSelection, playerSelection);
        div.appendChild(round);
        if (round.textContent.slice(4,7) == 'win') {
            userWinCount += 1;
        } else if (round.textContent.slice(4,7) == 'los') {
            computerWinCount += 1;
        }
        resultDiv.textContent = `You ${userWinCount} : ${computerWinCount} Computer`;
        if (userWinCount == 5) {
            setTimeout(() => {if (!alert(`You are the winner. Final score is You ${userWinCount} : ${computerWinCount} Computer`))
            {window.location.reload();}}, 1);
        } else if (computerWinCount == 5) {
            setTimeout(() => {if (!alert(`The computer is the winner. Final score is You ${userWinCount} : ${computerWinCount} Computer`))
            {window.location.reload();}}, 1);
        }
    })
    paperBtn.addEventListener('click', () => {
        let playerSelection = paperBtn.textContent;
        let computerSelection = getComputerChoice();
        let round = document.createElement("p");
        round.textContent = playRound(computerSelection, playerSelection);
        div.appendChild(round);
        if (round.textContent.slice(4,7) == 'win') {
            userWinCount += 1;
        } else if (round.textContent.slice(4,7) == 'los') {
            computerWinCount += 1;
        }
        resultDiv.textContent = `You ${userWinCount} : ${computerWinCount} Computer`;
        if (userWinCount == 5) {
            setTimeout(() => {if (!alert(`You are the winner. Final score is You ${userWinCount} : ${computerWinCount} Computer`))
            {window.location.reload();}}, 1);
        } else if (computerWinCount == 5) {
            setTimeout(() => {if (!alert(`The computer is the winner. Final score is You ${userWinCount} : ${computerWinCount} Computer`))
            {window.location.reload();}}, 1);
        }
    })
    scissorsBtn.addEventListener('click', () => {
        let playerSelection = scissorsBtn.textContent;
        let computerSelection = getComputerChoice();
        let round = document.createElement("p");
        round.textContent = playRound(computerSelection, playerSelection);
        div.appendChild(round);
        if (round.textContent.slice(4,7) == 'win') {
            userWinCount += 1;
        } else if (round.textContent.slice(4,7) == 'los') {
            computerWinCount += 1;
        }
        resultDiv.textContent = `You ${userWinCount} : ${computerWinCount} Computer`;
        if (userWinCount == 5) {
            setTimeout(() => {if (!alert(`You are the winner. Final score is You ${userWinCount} : ${computerWinCount} Computer`))
            {window.location.reload();}}, 1);
        } else if (computerWinCount == 5) {
            setTimeout(() => {if (!alert(`The computer is the winner. Final score is You ${userWinCount} : ${computerWinCount} Computer`))
            {window.location.reload();}}, 1);
            /*setTimeout allows for DOM changes to occur, showing the score, before the alert appears*/
        }
    })
}

playGame();