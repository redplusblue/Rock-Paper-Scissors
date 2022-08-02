// Author : Samir Kaba
// This program simulates a Rock Paper Scissors game with the computer in the console using JavaScript.

let userScore = 0;
let computerScore = 0;
let round = 1;
/*
This function returns the choice of the computer (Randomly Generated.) 
*/
function computerPlay() {
    const choices = ["Rock", "Paper", "Scissors"];
    //choice = random number in the range [0, choices.length]
    let choice = Math.floor(Math.random() * choices.length);
    result = choices[choice];
    return result
}

/*
This function takes in the user's choice shows win/loss prompt.
*/
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
            return
        } else if(computerScore > userScore) {
            scoreDiv.innerHTML = "Computer Wins!!"
            resultDiv.innerHTML = "Reload to play Again!"
            return
        } else {
            scoreDiv.innerHTML = "Tie Game!!"
            resultDiv.innerHTML = "Reload to play Again"
            return
        }

}
}



function userInput(choice){
    playGame(choice)
}