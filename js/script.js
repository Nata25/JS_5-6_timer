var start, stop = 0;

const msInSec = 1000;
const msInMin = 60000;
const msInHour = 3600000;

function Timer(ms) {
    this.miliseconds = ms;
    this.toString = function() {
        var seconds, minutes, hours;
        minutes = seconds = 0;
        return twoDigits(minutes) + ":" + twoDigits(seconds) + ":" + twoDigits(ms);
    }
}

var timerContainer = document.getElementsByClassName("timer")[0];
var startButton = document.getElementsByClassName("start-button")[0];
var clearButton = document.getElementsByClassName("clear-button")[0];

// miliseconds = 0;

// miliseconds = toDigits(miliseconds);

timer = new Timer(0);

timerContainer.innerText = timer.toString();

function twoDigits(num) {
    return (num < 10) ? ("0" + num) : num;
}

function start() {
    alert("Start timer!");
}

function clear() {
    alert("Clear timer!");
}

startButton.addEventListener("click", start, false);
clearButton.addEventListener("click", clear, false);
