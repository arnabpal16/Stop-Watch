let display = document.querySelector('.display');
let stopBtn = document.getElementById('stopBtn');
let startBtn = document.getElementById('startBtn');
let resetBtn = document.getElementById('resetBtn');

let msec = 0;
let secs = 0;
let mins = 0;

let timerId = null;


// function of start button
startBtn.addEventListener('click', function(){
    if(timerId !== null){
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 10);
});


// function of stop button

stopBtn.addEventListener('click', function(){
    clearInterval(timerId);
});


// function of reset button

resetBtn.addEventListener('click', function(){
    clearInterval(timerId);
    display.innerHTML = `00 : 00 : 00`;
    msec = secs = mins = 0;
});

function startTimer(){
    msec++;
    if(msec == 100){
        msec = 0;
        secs++;
        if(secs == 60){
            secs = 0;
mins++;
        }
    }

    let msecString = msec < 10 ? `0${msec}` : msec;
    let secsString = secs < 10 ? `0${secs}` : secs;
    let minsString = mins < 10 ? `0${mins}` : mins;
    

    display.innerHTML = `${minsString} : ${secsString} : ${msecString}`;

}