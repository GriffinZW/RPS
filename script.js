// Starting Variables
// Storing HTML elements as a variable for easy acess
let playerScoreBoard = document.querySelector('.p-count')
let computerScoreBoard = document.querySelector('.c-count')
let result = document.querySelector('.roundResults')
// Setting score variables for player and computer to track score
let playerScore = 0;
let computerScore = 0;
// Initializing global variables to sore user and computer selections
let computerChoice;
let playerChoice;
// Function to randomly generate a choice for the computer, uses a list to store seletcions
function makeCompChoice() {
  const computerOptions = ["rock", "paper", "scissors"];
  const randomNum = Math.floor(Math.random() * 3);
  computerChoice = computerOptions[randomNum]
}

function throwRock() {
  playerChoice = "rock";
  makeCompChoice();
  game(playerChoice, computerChoice);
}

function throwPaper() {
  playerChoice = "paper";
  makeCompChoice();
  game(playerChoice, computerChoice);
}

function throwScissors() {
  playerChoice = "scissors";
  makeCompChoice();
  game(playerChoice, computerChoice);
}

function computerWin() {
  result.innerHTML = 'Computer Won';
  computerScore++;
  computerScoreBoard.innerHTML = computerScore;
}

function game(player, computer) {
  if (player === computer) {
    result.innerHTML = 'Tie'
  } else if (player === 'rock' && computer === 'paper') {
    computerWin();

  } else if (player === 'paper' && computer === 'scissor') {
    computerWin();

  } else if (player === 'scissors' && computer === 'rock') {
    computerWin();

  } else {
    result.innerHTML = 'Player Won';
    playerScore++;
    playerScoreBoard.innerHTML = playerScore;
  }
}

function reset() {
// resets scores to 0
  userScore = 0;
  compScore = 0;

// display the new score to user
  playerScore.innerHTML = playerScoreBoard;
  computerScore.innerHTML = computerScoreBoard;

  // show blank result
  result.innerHTML = ``;

  // reenable all the RPS buttons so that user can continue to play
  rock.removeAttribute("disabled");
  paper.removeAttribute("disabled");
  scissors.removeAttribute("disabled");
}
