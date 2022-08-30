let userScore = 0;
let computerScore = 0;
let round = 1;
let playButtons = document.querySelectorAll('#play-btn');
let reloadButton = document.getElementById('reload-btn');

reloadButton.addEventListener('click', () => {
    location.reload()
})

function computerPlay() {
    const choices = ["Rock", "Paper", "Scissors"];
    let choice = Math.floor(Math.random() * choices.length);
    result = choices[choice];
    return result
}

function playGame(userSelection) {
    if (round > 5) {
        winner()
        return
        } 
    
    computerSelection = computerPlay()

    if (userSelection.toUpperCase() == "ROCK") {
        if (computerSelection.toUpperCase() == "ROCK") {
            message("tie")
        } else if (computerSelection.toUpperCase() == "PAPER") {
            message("computer")
        } else {
            message("user")
        }
    } else if (userSelection.toUpperCase() == "PAPER") {
        if(computerSelection.toUpperCase() == "ROCK"){
            message("user")
        } else if (computerSelection.toUpperCase() == "PAPER"){
            message("tie")
        } else {
            message("computer")
        }
    } else if (userSelection.toUpperCase() == "SCISSORS"){ 
        if(computerSelection.toUpperCase() == "ROCK") {
            message("computer")
        } else if (computerSelection.toUpperCase() == "PAPER") {
            message("user")
        } else {
            message("tie")
        }
    } else {
        message("invalid")
    }

    function message(outcome) {

        resultDiv = document.getElementById('results')
    
        if (outcome == "user") {
            resultDiv.innerHTML = `You win!<br/>User Choice: ${userSelection}.<br/>Computer Choice: ${computerSelection}.<br/><br/>As ${userSelection} > ${computerSelection}`
            scoreTracker(1)
        } else if (outcome == "computer") {
            resultDiv.innerHTML = `Computer wins!<br/>User Choice: ${userSelection}.<br/>Computer Choice: ${computerSelection}.<br/><br/>As ${computerSelection} > ${userSelection}`
            scoreTracker(-1)
        } else {
            resultDiv.innerHTML = `Its a tie!<br/>User Choice: ${userSelection}.<br/>Computer Choice: ${computerSelection}.<br/><br/>As ${computerSelection} = ${userSelection}`
            scoreTracker(0)
        }
    }

    function scoreTracker(number) {
        
        if (number >= 0){
            userScore += number;
            if (number == 0){
                win = "TIE GAME"
            } else {
                win = "YOU WIN!"
            }
        } else {
            computerScore -= number;
            win = "YOU LOSE"
        } 

        scoreDiv = document.getElementById('score')

        scoreDiv.innerHTML += `<br/> Round: ${round} &emsp; Your Score: <b>${userScore}</b> &emsp; Computer's Score: <b>${computerScore}</b> &emsp; --${win}`
        round += 1;
    }

    function winner() {
        if(userScore > computerScore) {
            scoreDiv.innerHTML = "You Win!!"
            resultDiv.innerHTML = "Reload to Play Again!"
        } else if(computerScore > userScore) {
            scoreDiv.innerHTML = "Computer Wins!!"
            resultDiv.innerHTML = "Reload to play Again!"
        } else {
            scoreDiv.innerHTML = "Tie Game!!"
            resultDiv.innerHTML = "Reload to play Again"
        }
        for(let i = 0; i < playButtons.length; i++) {
            playButtons[i].style.display = 'none';
        }
        reloadButton.style.display = 'block';
}
}

function userInput(choice){
    playGame(choice)
}