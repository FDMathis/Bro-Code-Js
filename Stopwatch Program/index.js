
// First select all needed elements from HTML document//
const timeDisplay = document.querySelector("#timeDisplay");
const startButton = document.querySelector("#startButton");
const pauseButton = document.querySelector("#pauseButton");
const resetButton = document.querySelector("#resetButton");

// Next, declare needed variables//
let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId;
let hours = 0;
let minutes = 0;
let seconds = 0;

// Then, add event listeners for buttons//
startButton.addEventListener("click", () => {
    if(paused){
        paused = false;
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(updateTime, 1000);
    }
});
pauseButton.addEventListener("click", () => {});
resetButton.addEventListener("click", () => {});

function updateTime(){
    elapsedTime = Date.now() - startTime;

    seconds = Math.floor(elapsedTime / 1000 % 60);
}
