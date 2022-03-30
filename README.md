# Rock-paper-scissors
rock paper scissors js project

Create a blank HTML document with a script tag (Hint: it is best practice to li
nk an external .js file). This game is going to be played completely from the console, so don’t worry about putting anything else in there.

Your game is going to play against the computer, so begin with a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play. Tip: use the console to make sure this is returning the expected output before moving to the next step!

Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
        Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).

Write a NEW function called game(). Call the playRound function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end. 