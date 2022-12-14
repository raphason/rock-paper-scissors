var playerScore = 0;
var computerScore = 0;

const btns = document.querySelectorAll('button');
const round = document.querySelector('.round-result');
const pScoreDisplay = document.querySelector('.player-score');
const cScoreDisplay = document.querySelector('.computer-score');
const reset = document.querySelector('.reset');

resetGame();

btns.forEach((button) => {
    button.addEventListener('click', function(e) {
        if (button.className != "reset") {
            playRound(button.className, getComputerChoice());
        }
        else {
            resetGame();
        }
    });
});

function getComputerChoice() {
    //Returns a random choice of 'Scarab', 'Ibis', or 'Lotus' as the computer move.
    move = Math.floor(Math.random() * 3);
    moves = ["Scarab", "Ibis", "Lotus"];
    choice = moves[move];

    return choice;
}

function playRound(playerSelection, computerSelection) {
    //Compare player and computer selections and declare round winner

    if (playerSelection == computerSelection) {
        round.textContent = "A tie! Nobody wins the round.";
    }
    else {
        if (playerSelection == "Scarab" && computerSelection == "Lotus" ||
            playerSelection == "Ibis" && computerSelection == "Scarab" ||
            playerSelection == "Lotus" && computerSelection == "Ibis") {

            playerScore += 1;
            round.textContent = "You win the round! " + playerSelection + " beats " + computerSelection + "!";
            pScoreDisplay.textContent = playerScore;
        }
        if (playerSelection == "Scarab" && computerSelection == "Ibis" ||
            playerSelection == "Ibis" && computerSelection == "Lotus" ||
            playerSelection == "Lotus" && computerSelection == "Scarab") {
            
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
        if (button.className != "reset") {
            button.disabled = true;
        }
    });
    reset.style.visibility = 'visible';
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    pScoreDisplay.textContent = playerScore;
    cScoreDisplay.textContent = computerScore;
    round.textContent = '';
    reset.style.visibility = 'hidden';

    btns.forEach((button) => {
        button.disabled = false;
    });
    
}