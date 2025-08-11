let timer = null, startTime = 0, elapsed = 0;
const display = document.getElementById("display");
const lapsList = document.getElementById("laps");

function format(ms) {
  const total = new Date(ms);
  const mm = String(total.getUTCMinutes()).padStart(2,'0');
  const ss = String(total.getUTCSeconds()).padStart(2,'0');
  const cs = String(Math.floor(total.getUTCMilliseconds() / 10)).padStart(2,'0');
  return `${mm}:${ss}:${cs}`;
}

document.getElementById("startBtn").addEventListener("click", () => {
  if (timer) return;
  startTime = Date.now() - elapsed;
  timer = setInterval(() => {
    elapsed = Date.now() - startTime;
    display.textContent = format(elapsed);
  }, 10);
});

document.getElementById("stopBtn").addEventListener("click", () => {
  clearInterval(timer);
  timer = null;
});

document.getElementById("resetBtn").addEventListener("click", () => {
  clearInterval(timer);
  timer = null;
  elapsed = 0;
  display.textContent = "00:00:00";
  lapsList.innerHTML = "";
});

document.getElementById("lapBtn").addEventListener("click", () => {
  if (!timer) return;
  const li = document.createElement("li");
  li.textContent = format(elapsed);
  lapsList.appendChild(li);
});

document.getElementById("clearLapsBtn").addEventListener("click", () => {
  lapsList.innerHTML = "";
});
