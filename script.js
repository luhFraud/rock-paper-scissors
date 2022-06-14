const list = ["rock", "paper", "scissors"];
playerScore = parseInt(0);
computerScore = parseInt(0);

function game(){
    for (let i = 0; i < 5; i++){
        let playerSelection = playerPlay();
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        console.log('Player Score = ' +playerScore);
        console.log('Computer Score = ' +computerScore);
    }
    console.log(declareWinner(playerScore, computerScore));
}
function computerPlay(){
    return list[Math.floor(Math.random()*list.length)];

}
function playerPlay(){
    let userInput = prompt("Type either rock, paper, or scissors.");
    while (userInput == null){
        input = prompt("Please type rock, paper, or scissors");
    }
    input = userInput.toLowerCase();
    return input;
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        return 'Draw!';
    } else if ((playerSelection === "rock" && computerSelection === "scissors")|| 
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")){
        playerScore++;
        return `You Win! ${playerSelection} beats ${computerSelection}`
    } else {
        computerScore++;
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
}
function declareWinner(playerScore, computerScore){
    if (computerScore > playerScore){
        return 'You lost the match!';
    } else if (playerScore > computerScore){
        return 'You won the match!';
    } else if (computerScore === playerScore){
        return "It's a Tie! Try again!"
    }

}

game()
