
// Starting Variables
// Storing HTML elements as a variable for easy acess
  let playerScore = document.querySelector('.p-count')
  let computerScore = document.querySelector('.c-count')
  let roundResults = document.querySelector('.result')
// Setting score variables for player and computer to track score
  let playerScore = 0;
  let computerScore = 0;
// Initializing global variables to sore user and computer selections
  let computerChoice;
  let playerChoice;
  // Function to randomly generate a choice for the computer, uses a list to store seletcions
  function computerChoice() {
    const computerOptions = ["rock", "paper", "scissor"];
    const randomNum = Math.floor(Math.random() * 3);
    computerChoice = computerOptions[randomNum]
  }
  function game() {

  }
