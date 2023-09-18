'use strict';

/*
console.log(displayMessage)
displayMessage = '🎉 Correct Number!'

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

// Guess my number
let secretNumber = Math.round(Math.random() * 5);
let score = 5;
let highscore = 0;
const displayMessage = function(message) {
    document.querySelector('.message').textContent = message; // OOP. Assigning document object to message argument.
}

// Clicking 'Check' function
document.querySelector('.check').addEventListener('click', function() { // function passed as value
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if (!guess) { // if no input given
        displayMessage('⛔ No number'); //textContent for text
        // when player wins
    } else if (guess === secretNumber) {
        displayMessage('🎉 Correct Number!');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem'
        if (score>highscore) { // condition
            highscore = score; // highscore assigned
            document.querySelector('.highscore').textContent = highscore; // shown
        }
        // when guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? '💹 Too high!' : '📉 Too low!'); // another if else condition
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('💣 You lost');
            document.querySelector('.score').textContent = 0; // when score becomes 0, score prints 0
        }
    }
});

//         // when guess is too low
//     } else if (guess < secretNumber) {
//         if (score > 1) {
//             displayMessage('📉 Too low!');
//             score--;
//             document.querySelector('.score').textContent = score;
//         } else {
//             displayMessage('💣 You lost');
//             document.querySelector('.score').textContent = 0;
//         }
//     }
// });

// Clicking again function
document.querySelector('.again').addEventListener('click', function () {
    score = 5;
    secretNumber = Math.round(Math.random() * 5);

    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = ''
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});



