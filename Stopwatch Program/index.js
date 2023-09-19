
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
pauseButton.addEventListener("click", () => {
    if(!paused){
        paused = true;
        elapsedTime = Date.now() - startTime;
        clearInterval(intervalId);
    }
});
resetButton.addEventListener("click", () => {
    paused = true;
    clearInterval(intervalId);
    elapsedTime = 0;
    currentTime = 0;
    startTime = 0;
    hours = 0;
    seconds = 0;
    minutes = 0;
    timeDisplay.textContent = "00:00:00";
});

function updateTime(){
    elapsedTime = Date.now() - startTime;

    seconds = Math.floor((elapsedTime / 1000) % 60);
    minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);
    
    seconds = pad(seconds);
    minutes = pad(minutes);
    hours = pad(hours);

    timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;

    function pad(unit){
        return (("0") + unit).length > 2 ? unit : "0" + unit
    }
}
