'use strict';

const secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
document.querySelector('.score').textContent = score;

document.querySelector('.check').addEventListener('click', function () {
  const guessNumber = Number(document.querySelector('.guess').value);
  console.log(guessNumber);

  if (!guessNumber) {
    displayMessage('No Number');
    document.querySelector('.number').textContent = secretNumber;
  } else if (secretNumber === guessNumber) {
    displayMessage('📊 Correct Answer');
    document.querySelector('body').style.backgroundColor = '#0EA293';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (secretNumber !== guessNumber) {
    if (score > 1) {
      displayMessage(secretNumber > guessNumber ? '📈 Low' : '📉 High');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('🙅🏻‍♀️ You Lose The Game!');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '?';
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
});

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}
