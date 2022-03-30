//iniatiale scores 
let playerScore = 0;
let computerScore = 0;
let draw = 0;
//function for computers play
function computerPlay() {
  let chanceOfPick = Math.random();
  if (chanceOfPick <= 0.333) {
    return "rock";  
  } else if (chanceOfPick >= 0.666) {
    return "paper";
  } else {
  return "scissors";
  }
}


/*function plays one round of rock paper scissorscontains 2 parameter(playerSel
  ection & computerSelection)*/ 
  function oneRound(playerSelection, computerSelection) {
    //playersSelection if set to lower case to create case insensitivity
    if (playerSelection.toLowerCase() === computerSelection) { 
      draw++;  
      return "Tie";
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper") {
      playerScore++;
      return "You win";
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
      computerScore++;
      return "Computer wins";
    }  else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
      playerScore++;
      return "You win";
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") {
      computerScore++;
      return "Computer wins";
    }  else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
      playerScore++;
      return "You win";
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock") {
      computerScore++;
      return "Computer wins" + computerScore;
    } 
  }

//function plays 1 round 
function game() {
  playerSelection = prompt("Rock, Paper, or Scissors?");
  let computerSelection = computerPlay();
  return oneRound(playerSelection, computerSelection);
}

//function to store the scores after aech round
function winner() {
  if (playerScore > computerScore) {
    return "Winner!!!!!!!!!";
  } else if (playerScore < computerScore) {
    return "Sigh, Better luck next time";
  } else {
    return "Stale mate";
  }
}

//the function game() is called 5 times with a for-loop
for (let i=0; i< 5; i++) {
  console.log(game());
}
//displays the final winner
console.log(winner());

//insert previous function into game
//this function should keep the scores and reports winner at the end with console.log
//use loops or call the function 5 times
//use prompt to get user 