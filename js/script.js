var timerOn;
var current = 0;
var inProgress = false;

var timerContainer = myTimer;
var startButton = document.getElementById("start");
var clearButton = document.getElementById("clear");

function Timer(time, container) {
    this.timePassed = time;
    this.container = container;

    this.toString = function() {
        var seconds, minutes, hours;
        hours = Math.floor(this.timePassed / 3600000);
        minutes = Math.floor((this.timePassed / 60000) % 60);
        seconds = Math.floor((this.timePassed / 1000) % 60);
        miliseconds = this.timePassed % 1000;

        return leadingZeroes(hours, 2) +
         ":" + leadingZeroes(minutes, 2) +
         ":" + leadingZeroes(seconds, 2) +
         ":" + leadingZeroes(miliseconds, 3);
    }

    this.draw = function() {
        this.container.innerHTML = this.toString().slice(0, -4)
            + "<span id='miliseconds'>"
            + timer.toString().slice(-3)
            + "</span>";
    }
}

// Helper for toString() method; add leading 0
// @param num, base number > 0
// @return string
function leadingZeroes(num, base) {
    return ("00" + num).slice(-base);
}

// Event listener for start/pause/continue button
function startTimer() {
    if (inProgress) {
        clearInterval(timerOn);
        startButton.innerText = "continue";
        timer.draw();
        inProgress = false;
    }
    else {
        startButton.innerText = "pause";
        var start = Date.now();
        timerOn = setInterval(function() {
            timer.timePassed = Date.now() + current - start;
            timer.draw();
        }, 1);
        inProgress = true;
        current = timer.timePassed;
    }
}

// Event listener for clear button
function clearTimer() {
    clearInterval(timerOn);
    timer.timePassed = 0;
    timer.draw();
    startButton.innerText = "start";
    inProgress = false;
}

startButton.addEventListener("click", startTimer, false);
clearButton.addEventListener("click", clearTimer, false);

timer = new Timer(0, timerContainer);
timer.draw();
