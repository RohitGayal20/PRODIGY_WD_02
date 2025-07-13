let timer;
let [hours, minutes, seconds] = [0, 0, 0];
let running = false;

function updateDisplay() {
  const h = String(hours).padStart(2, '0');
  const m = String(minutes).padStart(2, '0');
  const s = String(seconds).padStart(2, '0');
  document.getElementById('display').innerText = `${h}:${m}:${s}`;
}

function start() {
  if (!running) {
    running = true;
    timer = setInterval(() => {
      seconds++;
      if (seconds === 60) {
        seconds = 0;
        minutes++;
      }
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
      updateDisplay();
    }, 1000);
  }
}

function pause() {
  clearInterval(timer);
  running = false;
}

function reset() {
  clearInterval(timer);
  [hours, minutes, seconds] = [0, 0, 0];
  running = false;
  updateDisplay();
  document.getElementById('laps').innerHTML = '';
}

function lap() {
  if (running) {
    const lapTime = document.createElement('li');
    lapTime.textContent = document.getElementById('display').innerText;
    document.getElementById('laps').appendChild(lapTime);
  }
}

updateDisplay(); 
