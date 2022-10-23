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