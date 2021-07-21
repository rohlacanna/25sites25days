const img = document.getElementById("img");
const buttons = document.getElementById("buttons");

const trafficLight = (event) => {
  console.log(event);
};

buttons.addEventListener("click", trafficLight);
