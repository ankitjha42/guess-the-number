'use strict';

let secretnumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore=0;
document.querySelector('.check').addEventListener('click', function () {
    let guess = Number(document.querySelector('.entery').value);
    console.log(guess);


    //no input
    if (!guess) {
        document.querySelector('.message').textContent = 'No number!❌';
    } else if (guess === secretnumber) {//player wins
        document.querySelector('.message').textContent = 'Congratulations! Correct number!🏆';
        document.querySelector('.number').textContent = secretnumber;
        document.querySelector('.box').style.backgroundColor = 'rgb(242, 119, 74)'
        if(score>highscore){
            highscore=score;
            document.querySelector('.highscore').textContent = `highscore : ${highscore}`;
        }
    } else if (guess > secretnumber) {//high
        document.querySelector('.message').textContent = 'Number is lesser than your guess';
        score--;
        document.querySelector('.score').textContent = `Score: ${score}`;
    } else {//low
        document.querySelector('.message').textContent = 'Number is greater than your guess';
        score--;
        document.querySelector('.score').textContent = `Score: ${score}`;
    }
    
    if(score===0){
        document.querySelector('.score').textContent="you lost the game"
    }
    
});

document.querySelector('.again').addEventListener('click',function(){
    score=20;
    secretnumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'START GUESSING....';
    document.querySelector('.score').textContent = `Score: ${score}`;
    document.querySelector('.number').textContent ='?';
    document.querySelector('.entery').value='';
    document.querySelector('.box').style.backgroundColor = '#000000'
})
