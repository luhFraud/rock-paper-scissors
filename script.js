const list = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const resultsDiv = document.querySelector('.results');
const p = document.createElement('p');
const h3 = document.createElement('h3');
const playerScoreSpan = document.querySelector('.playerScore');
const computerScoreSpan = document.querySelector('.computerScore')

function computerPlay(){
    return list[Math.floor(Math.random()*list.length)];

}
function playerPlay(){
    let userInput = prompt("Type either rock, paper, or scissors.");
    input = userInput.toLowerCase();
    return input;
}
function playRound(playerSelection, computerSelection) {
    console.log('1', playerSelection, '2', computerSelection)
    if (playerSelection === computerSelection){
        p.innerText = `Draw! You both selected ${playerSelection}`;
        resultsDiv.appendChild(p)
    } else if ((playerSelection === "rock" && computerSelection === "scissors")|| 
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")){
        playerScore++;
        p.innerText = `You Win! ${playerSelection} beats ${computerSelection}`
        resultsDiv.appendChild(p)
    } else {
        computerScore++;
        p.innerText = `You Lose! ${computerSelection} beats ${playerSelection}`
        resultsDiv.appendChild(p)
    }
}
function declareWinner(playerScore, computerScore){
    if (computerScore === 5){
        h3.innerText = `Computer Won The Match! ${computerScore} - ${playerScore}`
        resultsDiv.append(h3)
        
    } else if (playerScore === 5){
        h3.innerText = `You Won The Match! ${playerScore} - ${computerScore}`
        resultsDiv.append(h3)
        
}};
const liveScores = (playerScore, computerScore) => {
    playerScoreSpan.innerText = `Player Score: ${playerScore}`
    computerScoreSpan.innerText = `Computer Score: ${computerScore}`
}
rockButton.addEventListener('click', () => {
    const computerSelection = computerPlay()
    const playerSelection = 'rock'
    playRound(playerSelection, computerSelection)
    declareWinner(playerScore, computerScore)
    liveScores(playerScore, computerScore)
});
paperButton.addEventListener('click', () => {
    const computerSelection = computerPlay()
    const playerSelection = 'paper'
    playRound(playerSelection, computerSelection)
    declareWinner(playerScore, computerScore)
    liveScores(playerScore, computerScore)
});
scissorsButton.addEventListener('click', () => {
    const computerSelection = computerPlay()
    const playerSelection = 'scissors'
    playRound(playerSelection, computerSelection)
    declareWinner(playerScore, computerScore)
    liveScores(playerScore, computerScore)
});