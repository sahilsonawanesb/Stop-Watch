// selecting the element 

let timeEle = document.getElementsByClassName("time")[0];
// selecting the button..

let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");

let seconds = 0;
let interval = null;

// adding eventlistener to each button.

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);

// timer function

function timer() {

    seconds++;

    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds - (hrs *  3600)) / 60);
    let sec = seconds % 60;

    if(sec < 10){
        sec = '0' + sec;
    }

    if(hrs < 10){
        hrs = '0' + hrs;
    }

    if(mins < 10){
        mins = '0' + mins;
    }

    timeEle.innerHTML = `${hrs}:${mins}:${sec}`;
}

// start function 

function start(){
// console.log("start")
    if(interval){
        return;
    }

    interval = setInterval(timer, 1000);
}

// stop function 

function stop(){
    clearInterval(interval);
    interval = null;
}

// reset function 

function reset(){
    stop();
    seconds = 0;
    timeEle.innerHTML = "00.00.00";
}