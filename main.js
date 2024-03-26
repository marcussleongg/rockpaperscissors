const choiceArray = ['rock', 'paper', 'scissors'];
function getComputerChoice() {
    let computerChoice = choiceArray[Math.floor(Math.random()*choiceArray.length)];
    console.log(computerChoice);
}
getComputerChoice();