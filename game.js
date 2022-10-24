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
    playerSelection = capitalize(playerSelection);

    const playerWin = "You Win! " + playerSelection + " beats " + computerSelection + "!";
    const computerWin = "You Lose! " + computerSelection + " beats " + playerSelection + "!";
    const tie = "It's a tie! You both chose " + playerSelection + "!";

    if (playerSelection == computerSelection) {
        return tie;
    }
    switch (playerSelection) {
        case "Rock":
            if (computerSelection == "Scissors") {
                return playerWin;
            }
            else {
                return computerWin;
            }
        case "Paper":
            if (computerSelection == "Rock") {
                return playerWin;
            }
            else {
                return computerWin;
            }
        case "Scissors":
            if (computerSelection == "Paper") {
                return playerWin;
            }
            else {
                return computerWin;
            }
    }
}

function capitalize(str) {
    result = str.slice(0, 1).toUpperCase() + str.slice(1, str.length).toLowerCase()
    return result;
}