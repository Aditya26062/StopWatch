const startButton = document.querySelector('#btn1');
const stopButton = document.querySelector('#btn2');
const resetButton = document.querySelector('#btn3');

let timerCount=0;
let secs = document.querySelector('.sec');
let mins = document.querySelector('.minute');
let intervalID ;

stopButton.style.display='none';

function start()
{
    intervalID = setInterval(incrementTimer ,1000);
    startButton.style.display='none';
    stopButton.style.display='inline-block';
}

function stop()
{
    clearInterval(intervalID);
    startButton.style.display='inline-block';
    stopButton.style.display='none';
}

function reset()
{
    stop();
    timerCount=0;
    secs.innerText='00';
    mins.innerText='00';
}

function incrementTimer()
{
    timerCount++;
    secs.innerText=padd(timerCount%60);
    mins.innerText=padd(Math.floor(timerCount/60));
    // console.log(timerCount);
}
function padd(n){
    return n<10?`0${n}`:n;
}
startButton.addEventListener('click',start);
stopButton.addEventListener('click',stop);
resetButton.addEventListener('click',reset);

//cricBook Game Code

// function game()
// {
//     let turn =0;
//     let score = 0;
//     return function(x)
//     {
//         if(turn<=5)
//         {
//             score=score+x;
//             console.log(`${turn}--> Your score is ${score}`);
//             turn+=1;
//         }
//         else{
//             console.log(`Your Final score is ${score}`);
//         }
//     }
// }

// player1=game();
// player2=game();

