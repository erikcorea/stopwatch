//Global Variables
const timeEl = document.querySelector('.watch .time');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');

let seconds = 0;
let interval = null;

//Even Listeners
startBtn.addEventListener('click', start)
stopBtn.addEventListener('click', stop)
resetBtn.addEventListener('click', reset)

//Update the timer
function timer(){
    seconds++;
    //Format our time
    let hours = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds - (hours * 3600)) / 60);
    let secs = seconds % 60;
    
    if(secs < 10) secs = '0' + secs;
    if(mins < 10) mins = '0' + mins;
    if(hours < 10) mins = '0' + hours;
    timeEl.innerHTML = `${hours}:${mins}:${secs}`;
}

function start(){
    if(interval){
        return
    }

    interval = setInterval(timer, 1000);
}

function stop(){
    clearInterval(interval);
    interval = null;
}

function reset(){
    stop();
    seconds = 0;
    timeEl.innerHTML = '00:00:00';
}