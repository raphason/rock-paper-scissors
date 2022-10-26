var playerScore = 0;
var computerScore = 0;

const btns = document.querySelectorAll('button');
const round = document.querySelector('.round-result');
const pScoreDisplay = document.querySelector('.player-score');
const cScoreDisplay = document.querySelector('.computer-score');

function getComputerChoice() {
    //Returns a random choice of 'Rock', 'Paper', or 'Scissors' as the computer move.
    move = Math.floor(Math.random() * 3);
    choice = ""

    switch(move) {
        case 0:
            choice = "Rock";
            break;
        case 1:
            choice = "Paper";
            break;
        case 2:
            choice = "Scissors";
            break;
    }

    return choice;
}

function playRound(playerSelection, computerSelection) {
    //Compare player and computer selections and declare round winner

    if (playerSelection == computerSelection) {
        updateRoundResult("tie");
    }
    else {
        switch (playerSelection) {
            case "Rock":
                if (computerSelection == "Scissors") {
                    updateRoundResult("player win");
                }
                else {
                    updateRoundResult("comp win");
                }
                break;
            case "Paper":
                if (computerSelection == "Rock") {
                    updateRoundResult("player win");
                }
                else {
                    updateRoundResult("comp win");
                }
                break;
            case "Scissors":
                if (computerSelection == "Paper") {
                    updateRoundResult("player win");
                }
                else {
                    updateRoundResult("comp win");
                }
                break;
        }
    }
}

function updateRoundResult(outcome) {
    //update the relevant scores and round result divs

    switch(outcome) {
        case "tie":
            round.textContent = "A tie! Nobody wins the round.";
            break;
        case "player win":
            playerScore += 1;
            round.textContent = "You win the round.";
            pScoreDisplay.textContent = playerScore;
            break;
        case "comp win":
            computerScore += 1;
            round.textContent = "The computer wins the round.";
            cScoreDisplay.textContent = computerScore;
            break;
    }
}


btns.forEach((button) => {
    button.addEventListener('click', function(e) {
        playRound(e.target.className, getComputerChoice());
    });
});
