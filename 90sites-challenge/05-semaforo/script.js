const img = document.getElementById("img");
const buttons = document.getElementById("buttons");

const trafficLight = (event) => {
  turnOn[event.target.id]();
};

const turnOn = {
  red: () => (img.src = "https://i.ibb.co/h9x75bD/vermelho.png"),
  yellow: () => (img.src = "https://i.ibb.co/H7qp1MJ/amarelo.png"),
  green: () => (img.src = "https://i.ibb.co/hYr39z9/verde.png"),
};

buttons.addEventListener("click", trafficLight);
