var timerContainer = myTimer;
var startButton = document.getElementById("start");
var clearButton = document.getElementById("clear");

var timerOn;
var inProgress = false;

function Timer(time, container) {
    this.timePassed = time;
    this.container = container;

    this.toString = function() {
        var seconds, minutes, hours;
        hours = Math.floor(this.timePassed / 3600000);
        minutes = Math.floor((this.timePassed / 60000) % 60);
        seconds = Math.floor((this.timePassed / 1000) % 60);
        miliseconds = this.timePassed % 1000;

        return ("0" + hours).slice(-2) +
         ":" + ("0" + minutes).slice(-2) +
         ":" + ("0" + seconds).slice(-2) +
         ":" + miliseconds;
    }

    this.draw = function() {
        this.container.innerHTML = this.toString().slice(0, 8)
            + "<span class='pull-right' id='miliseconds'>"
            + timer.toString().slice(9)
            + "</span>";
    }
}

// Event listener for start/pause/continue button
function startTimer() {
    if (inProgress) {
        startButton.innerText = "continue";
        startButton.className = "button btn btn-success btn-lg";
        clearInterval(timerOn);
        timer.draw();
        inProgress = false;
    }
    else {
        var current = timer.timePassed;
        startButton.className = "button btn btn-primary btn-lg";
        startButton.innerText = "pause";
        var start = Date.now();
        timerOn = setInterval(function() {
            timer.timePassed = Date.now() + current - start;
            timer.draw();
        }, 1);
        inProgress = true;
    }
}

// Event listener for clear button
function clearTimer() {
    clearInterval(timerOn);
    timer.timePassed = 0;
    timer.draw();
    startButton.innerText = "start";
    startButton.className = "button btn btn-success btn-lg";
    inProgress = false;
}

startButton.addEventListener("click", startTimer, false);
clearButton.addEventListener("click", clearTimer, false);

timer = new Timer(0, timerContainer);
timer.draw();
