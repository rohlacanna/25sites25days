const img = document.getElementById("img");
const buttons = document.getElementById("buttons");

let colorIndex = 0;
let intervalId = null;

const trafficLight = (event) => {
  stopAutomatic();
  turnOn[event.target.id]();
};

const nextIndex = () => (colorIndex = colorIndex < 2 ? ++colorIndex : 0);

/* const nextIndex = () => {
  if (colorIndex < 2) {
    colorIndex++;
  } else {
    colorIndex = 0;
  }
}; */

const changeColor = () => {
  const colors = ["red", "yellow", "green"];
  const color = colors[colorIndex];
  turnOn[color]();

  nextIndex();
};

const stopAutomatic = () => {
  clearInterval(intervalId);
};

const turnOn = {
  red: () => (img.src = "https://i.ibb.co/h9x75bD/vermelho.png"),
  yellow: () => (img.src = "https://i.ibb.co/H7qp1MJ/amarelo.png"),
  green: () => (img.src = "https://i.ibb.co/hYr39z9/verde.png"),
  automatic: () => (intervalId = setInterval(changeColor, 1000)),
};

buttons.addEventListener("click", trafficLight);
