//initial scores
let playerScore = 0;
let computerScore = 0;
let draw = 0;
let win = " You: " + playerScore + 1  + " Compter: " + computerScore;
let loss = "You: " + playerScore + " Computer: " + computerScore; 

//1.
//function for computers play
function computerPlay() {
  //choices ["rock", "paper", "scissors"]
  let random = Math.random();
  //return pickOne;
  if (random <= 0.333) {
    return "rock";
  } else if (random >= 0.666) {
    return "paper";
  } else {
  return "scissors";
  }
}

//2.
/*function plays one round of rock paper scissors
  contains 2 parameter(playerSelection & computerSelection) 
  & declares winner of said round from given parameter     */
  function oneRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection) {
      return "Tie ";
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper") {
      return "You win\n" + win;
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
      return "Computer wins\n" + loss;
    }  else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
      return "You win";
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") {
      return "Computer wins";
    }  else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
      return "You win";
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock") {
      return "Computer wins";
    }
  }
//parameter function is case-insensitive
//NOTE: function should return and not console.log
const playerSelection ="rock";
const computerSelection = computerPlay()
console.log(oneRound(playerSelection, computerSelection))
//3.
//function called game() 
//const playerSelection = prompt("rock, paper, or scissors");
//const computerSelection = computerPlay();


//insert previous function into game
//this function should keep the scores and reports winner at the end with console.log
//use loops or call the function 5 times
//use prompt to get user 