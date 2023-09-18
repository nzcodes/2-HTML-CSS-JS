let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Random number between 0-9 for the target number
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}

// Game logic: to determine which guess is closest to the target number
const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
  const humanDifference = Math.abs(targetGuess - humanGuess);
  const computerDifference = Math.abs(targetGuess - computerGuess);
  return humanDifference <= computerDifference;
}

// increasing the winner's score after each round
const updateScore = winner => {
  if (winner === 'human') {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
}
updateScore('human');

// updating the round number after each round
const advanceRound = () => currentRoundNumber++;

const getAbsoluteDistance = (num1, num2) => {
  return Math.abs(num1 - num2);
}


