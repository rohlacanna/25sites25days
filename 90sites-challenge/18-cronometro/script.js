let timeRef = Date.now();
let stopWatch = false;
let accumulated = 0;

function start() {
  stopWatch = true;
}

function pause() {
  stopWatch = false;
}

function restart() {
  accumulated = 0;
}

setInterval(() => {
  let time = document.getElementById('time');
  if (stopWatch) {
    accumulated += Date.now() - timeRef;
  }
  timeRef = Date.now();
  time.innerHTML = formatMS(accumulated);
}, 100 / 60);

function formatMS(time_ms) {
  let MS = time_ms % 1000;
  let S = Math.floor(((time_ms - MS) / 1000) % 60);
  let M = Math.floor((S / 60) % 60);
  let H = Math.floor(M / 60);
  Number.prototype.zeros = function (n) {
    return (this + '').padStart(n, 0);
  };
  return H.zeros(2) + ':' + M.zeros(2) + ':' + S.zeros(2) + '.' + MS.zeros(3);
}
