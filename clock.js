let now = new Date();

let hours = now.getHours() % 12;
let minutes = now.getMinutes();
let seconds = now.getSeconds();

function render(h, m, s){
  h = h.toString();
  m = m.toString();
  s = s.toString();
  h = h.length === 1 ? "0" + h : h;
  m = m.length === 1 ? "0" + m : m;
  s = s.length === 1 ? "0" + s : s;
  document.getElementById("onload").innerHTML = `${h}:${m}:${s}`;
}

function update() {
  seconds += 1;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }
  if (hours === 13){
    hours = 1;
  }
  render(hours, minutes, seconds);
}

function timer() {
  setInterval(update,1000);
}

timer();
