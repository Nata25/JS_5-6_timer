var timerContainer = document.getElementsByClassName("timer")[0];

var start = 0;
var stop = 0;

var miliseconds = 0;
var seconds = 0;
var minutes = 0;

timerContainer.innerText = minutes + ":" + seconds + ":" + miliseconds;

var startButton = document.getElementsByClassName("start-button")[0];
var clearButton = document.getElementsByClassName("clear-button")[0];

function start() {
    alert("Start timer!");
}

function clear() {
    alert("Clear timer!");
}

startButton.addEventListener("click", start, false);
clearButton.addEventListener("click", clear, false);
