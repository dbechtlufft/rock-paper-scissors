let getComputerSelection = (options) => {
    return options[Math.floor(Math.random() * options.length)];
}

let calculateRoundWinner = (playerSelection, computerSelection, options, score) => {

    const playerSelectionIndex = options.indexOf(playerSelection);
    const computerSelectionIndex = options.indexOf(computerSelection);
    
    if (playerSelectionIndex === computerSelectionIndex) {
        console.log(`We draw! We both selected ${playerSelection}`);
        return score
    }
    else if (mod(playerSelectionIndex - computerSelectionIndex, options.length) < options.length/2) {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        score[0]++;
        return score;
    }
    else {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        score[1]++;
        return score;
    }
}

let fixPlayerSpelling = (playerSelection) => {
    return playerSelection.at(0).toUpperCase() + playerSelection.toLowerCase().slice(1);
}

let mod = (a, b) => {
    const c = a % b;
    return c < 0 ? c + b : c;
}

let game = () => {
    const options = ['Rock', 'Paper', 'Scissors'];
    let score = [0,0];
    
    for (let i = 0; i < 5; i++){
        console.log(`Starting round ${i+1}`)

        let playerSelection = prompt(`Rock, Paper or Scissors?`)
        playerSelection = fixPlayerSpelling(playerSelection)
        console.log(`You selected ${playerSelection}`)

        let computerSelection = getComputerSelection(options);
        console.log(`Computer selected ${computerSelection}`)

        score = calculateRoundWinner(playerSelection, computerSelection, options, score)

        console.log(`Score:\nPlayer: ${score[0]}\nComputer: ${score[1]}`)
    }

    console.log(`Score:\nPlayer: ${score[0]}\nComputer: ${score[1]}`)
}

game()

