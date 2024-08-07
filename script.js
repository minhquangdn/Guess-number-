'use strict';

//su dung cau lenh sau de lay một class
//nếu từ id thì là #message
// phuong thuc textContent de lay content trong the

/*
let str = document.querySelector('.message').textContent;
console.log(str);
document.querySelector('.message').textContent = '🎉 Correct Number!';
document.querySelector('.number') = 13
ducument.querySelector('.score') = 20
let guess = document.querySelector('.guess').value
*/

let x = Math.trunc(Math.random() * 20) + 1;
console.log(x);
let score = 20;
let highscore = 0;

function display(score, x, message, color, width) {
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = x;
  document.querySelector('.message').textContent = message;
  document.querySelector('body').style.backgroundColor = color;
  document.querySelector('.number').style.width = width;
}

document.querySelector('.again').addEventListener('click', function () {
  x = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  console.log(x);
  display(score, x, 'Start guessing...', ' #222', '15rem');
});

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'Please enter a number';
  } else if (score > 1) {
    if (guess !== x) {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent =
        guess > x ? 'Enter lower' : 'Enter higher';
    } else {
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
      display(score, x, '🎉 Correct Number!', 'green', '30rem');
    }
  } else {
    document.querySelector('.message').textContent = 'Game over!!';
    document.querySelector('.score').textContent = score - 1;
    document.querySelector('.number').textContent = x;
  }
});
