var playerScore = 0;
var computerScore = 0;

const btns = document.querySelectorAll('button');
const round = document.querySelector('.round-result');
const pScoreDisplay = document.querySelector('.player-score');
const cScoreDisplay = document.querySelector('.computer-score');

btns.forEach((button) => {
    button.addEventListener('click', function(e) {
        playRound(e.target.className, getComputerChoice());
    });
});

function getComputerChoice() {
    //Returns a random choice of 'Rock', 'Paper', or 'Scissors' as the computer move.
    move = Math.floor(Math.random() * 3);
    moves = ["Rock", "Paper", "Scissors"];
    choice = moves[move];

    return choice;
}

function playRound(playerSelection, computerSelection) {
    //Compare player and computer selections and declare round winner

    if (playerSelection == computerSelection) {
        round.textContent = "A tie! Nobody wins the round.";
    }
    else {
        if (playerSelection == "Rock" && computerSelection == "Scissors" ||
            playerSelection == "Paper" && computerSelection == "Rock" ||
            playerSelection == "Scissors" && computerSelection == "Paper") {

            playerScore += 1;
            round.textContent = "You win the round! " + playerSelection + " beats " + computerSelection + "!";
            pScoreDisplay.textContent = playerScore;
        }
        if (playerSelection == "Rock" && computerSelection == "Paper" ||
            playerSelection == "Paper" && computerSelection == "Scissors" ||
            playerSelection == "Scissors" && computerSelection == "Rock") {
            
            computerScore += 1;
            round.textContent = "The computer wins the round! " + computerSelection + " beats " + playerSelection + "!";
            cScoreDisplay.textContent = computerScore;
        }
    }
    if (playerScore >= 5) {
        declareWinner("Player");
    }
    else if (computerScore >= 5) {
        declareWinner("Computer");
    }
}

function declareWinner(winner) {
    round.textContent = winner + " has reached 5 first and won the game!"
    btns.forEach((button) => {
        button.disabled = true;
    });
}