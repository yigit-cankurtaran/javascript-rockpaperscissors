'use strict'

// we are going to use this with 1 and 3 to determine which result we get.
function randomness(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getComputerChoice(){
  const ourNum = randomness(1, 3);
  let result = "";
  if (ourNum == 1){
    result += "Rock";
  }
  else if (ourNum == 2){
    result += "Paper";
  }
  else{
    result += "Scissors";
  }
  return(result);
}

function play(playerSelection, computerSelection){
  let input = prompt("Please enter whichever you want to play: Rock, Paper, Scissors");
  playerSelection = input.toLowerCase();
  computerSelection = getComputerChoice().toLowerCase();
  console.log("You picked " + playerSelection);
  console.log("Computer picked " + computerSelection);

  if (playerSelection == "rock"){
    if (computerSelection == "rock") return("It's a draw.");
    else if (computerSelection == "paper") return ("Computer wins.");
    else return ("You win.");
  }
  else if (playerSelection == "paper"){
    if (computerSelection == "rock") return("You win.");
    else if (computerSelection == "paper") return ("It's a draw.");
    else return ("Computer wins.");
  }
  else{
    if (computerSelection == "rock") return("Computer wins.");
    else if (computerSelection == "paper") return ("You win.");
    else return ("It's a draw.");
  }
}

console.log(play());
