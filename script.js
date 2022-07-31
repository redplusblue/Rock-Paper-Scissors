// Author : Samir Kaba
// This program simulates a Rock Paper Scissors game with the computer in the console using JavaScript.

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

    /*
    This function takes in the outcome and displays an alert appropriately.
    */
    function message(outcome) {
        if (outcome == "user") {
            alert(`You win!\nUser Choice: ${userSelection}.\nComputer Choice: ${computerSelection}.\n\nAs ${userSelection} > ${computerSelection}`)
        } else if (outcome == "computer") {
            alert(`Computer wins!\nUser Choice: ${userSelection}.\nComputer Choice: ${computerSelection}.\n\nAs ${computerSelection} > ${userSelection}`)
        } else if (outcome == "tie"){
            alert(`Its a tie!\nUser Choice: ${userSelection}.\nComputer Choice: ${computerSelection}.\n\nAs ${computerSelection} = ${userSelection}`)
        } else {
            alert(`\"${userSelection}\" is an invalid choice! Pick one out of Rock/Paper/Scissors!`)
        }
    }
}

//Welcome message on console
console.log("Welcome to the Rock/Paper/Scissors game!")

//Prompt for user input
const userSelection = window.prompt("Enter your choice: ")

//Calling the playGame() function and passing in user's input
playGame(userSelection)
