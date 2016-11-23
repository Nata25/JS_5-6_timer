var timerOn;
var inProgress = false;

function Timer(time, container) {
    const msInSec = 1000;
    const msInMin = 60000;
    const msInHour = 3600000;

    this.timePassed = time;
    this.container = container;

    this.toString = function() {
        var seconds, minutes, hours;
        hours = Math.floor(this.timePassed / msInHour);
        minutes = Math.floor((this.timePassed / msInMin) % 60);
        seconds = Math.floor((this.timePassed / msInSec) % 60);
        miliseconds = this.timePassed % msInSec;

        return formatDigits(hours, 2) +
         ":" + formatDigits(minutes, 2) +
         ":" + formatDigits(seconds, 2) +
         ":" + formatDigits(miliseconds, 3);
    }

    this.draw = function() {
        clock = this.toString().slice(0, -4)
            + "<span id='miliseconds'>"
            + timer.toString().slice(-3)
            + "</span>";
        this.container.innerHTML = clock;
    }
}

var timerContainer = myTimer;
var startButton = document.getElementById("start");
var clearButton = document.getElementById("clear");

timer = new Timer(0, timerContainer);

timer.draw();

function formatDigits(num, base) {
    return ("00" + num).slice(-base);
}

var current = 0;

function startTimer() {
    if (inProgress) {
        clearInterval(timerOn);
        startButton.innerText = "continue";
        // timer.draw();
        inProgress = false;
        console.log("paused:" + timer.timePassed);
    }
    else {
        startButton.innerText = "pause";
        var start = Date.now();
        // console.log("before entering setInterval, start: " + start);
        timerOn = setInterval(function() {
            // console.log("Inside setInterval:");
            // console.log("date: ", Date.now());
            // console.log("start: " + start);
            // console.log("time passed: " + timer.timePassed);
            // console.log("Date.now() - start: " + timer.timePassed);
            timer.timePassed = Date.now() + current - start;
            timer.draw();
            // if (timer.timePassed == 0) {
            //     console.log("catch!");
            // }
            // setTimeout(function() {
            //     clearInterval(timerOn);
            // }, 100);
        }, 1);
        inProgress = true;
        console.log("restarted:" + timer.timePassed);
        current = timer.timePassed;
    }
}

function clearTimer() {
    clearInterval(timerOn);
    timer.timePassed = 0;
    timer.draw();
    startButton.innerText = "start";
    inProgress = false;
}

startButton.addEventListener("click", startTimer, false);
clearButton.addEventListener("click", clearTimer, false);
