var start, stop = 0;

function Timer(time) {
    const msInSec = 1000;
    const msInMin = 60000;
    const msInHour = 3600000;

    this.timePassed = time;

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

    this.draw = function(container) {
        clock = this.toString().slice(0, -4) +
            "<span id='miliseconds'>" +
            timer.toString().slice(-3) +
            "</span>";
        container.innerHTML = clock;
    }
}

var timerContainer = timer;
var startButton = document.getElementById("start");
var clearButton = document.getElementById("clear");

timer = new Timer(3660201);
console.log(timer.toString());

timer.draw(timerContainer);

function formatDigits(num, base) {
    return (num < base) ? ("00" + num).slice(-base) : num;
}

function startTimer() {
    alert("Start timer!");
}

function clearTimer() {
    alert("Clear timer!");
}

startButton.addEventListener("click", startTimer, false);
clearButton.addEventListener("click", clearTimer, false);
