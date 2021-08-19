import Countdown from "./countdown.js";

const timeRemainingOlympics = new Countdown("August 8 2021 00:00:00 GMT-0300");
const times = document.querySelectorAll("[data-time]");

function showTime() {
  times.forEach((time, index) => {
    time.innerHTML = timeRemainingOlympics.totalTime[index];
  });
}

showTime();
setInterval(showTime, 1000);

// typeWriter

function typeWriter(elemento) {
  const textArray = elemento.innerHTML.split("");
  elemento.innerHTML = "";

  textArray.forEach((letter, i) => {
    setTimeout(() => (elemento.innerHTML += letter), 75 * i);
  });
}

const title = document.querySelector("h1");
typeWriter(title);

typeWriter(document.querySelector("p"));
