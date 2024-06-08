const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const reset = document.querySelector("#reset");

const hour = document.querySelector("#hour");
const minute = document.querySelector("#minute");
const second = document.querySelector("#second");

let timerId;

let seconds = 0;
let minutes = 0;
let hours = 0;

function clickHandler() {
  timerId = setInterval(() => {
    if (seconds >= 60) {
      seconds = 0;
      minutes += 1;
    }
    if (minutes >= 60) {
      minutes = 0;
      hours += 1;
    }

    second.innerHTML = `${seconds < 10 ? `0${seconds}` : seconds}`;
    minute.innerHTML = `${minutes < 10 ? `0${minutes}` : minutes}`;
    hour.innerHTML = `${hours < 10 ? `0${hours}` : hours}`;

    seconds++;
  }, 1000);
}

function startHandler() {}

function resetTimer() {
  second.innerHTML = "00";
  minute.innerHTML = "00";
  hour.innerHTML = "00";
  clearInterval(timerId);
}

function stopHandler() {
  clearInterval(timerId);
}

function resetHandler() {
  clearInterval(timerId);
  seconds = 0;
  minutes = 0;
  hours = 0;
  resetTimer();
}

start.addEventListener("click", clickHandler);
reset.addEventListener("click", resetHandler);
stop.addEventListener("click", stopHandler);

//hours , minutes, seconds
//60 seconds -> minutes+=1  and seconds=0
//60 minutes -> hour+=1  and minutes=0
//hours is the biggest unit
