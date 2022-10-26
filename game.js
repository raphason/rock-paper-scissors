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

    //const playerWin = "You Win! " + playerSelection + " beats " + computerSelection + "!";
    //const computerWin = "You Lose! " + computerSelection + " beats " + playerSelection + "!";
    //const tie = "It's a tie! You both chose " + playerSelection + "!";

    if (playerSelection == computerSelection) {
        return "Tie";
    }
    switch (playerSelection) {
        case "Rock":
            if (computerSelection == "Scissors") {
                return "Player win";
            }
            else {
                return "Computer win";
            }
        case "Paper":
            if (computerSelection == "Rock") {
                return "Player win";
            }
            else {
                return "Computer win";
            }
        case "Scissors":
            if (computerSelection == "Paper") {
                return "Player win";
            }
            else {
                return "Computer win";
            }
    }
}

const btns = document.querySelectorAll('button');
btns.forEach((button) => {
    button.addEventListener('click', function(e) {
        console.log(playRound(e.target.className, getComputerChoice()));
    });
});

function game() {
    //Play a five round game and report a winner at the end


    for (let i = 0; i < 5; i++) {
        var playerChoice = prompt("Choose Rock, Paper, or Scissors");
        var roundOutput = "";

        switch (playRound(playerChoice, getComputerChoice())) {
            case "Player win":
                playerScore = playerScore + 1;
                roundOutput = "Round " + (i+1) + ": Player Wins.";
                break;
            case "Computer win":
                computerScore = computerScore + 1;
                roundOutput = "Round " + (i+1) + ": Computer Wins.";
                break;
            case "Tie":
                roundOutput = "Round " + (i+1) + ": Tie.";
                break;
        }
    }

    if (playerScore > computerScore) {
        console.log("Player wins the game.");
    }
    else if (playerScore < computerScore) {
        console.log("Computer wins the game.");
    }
    else {
        console.log("Game ends in a tie.");
    }
}