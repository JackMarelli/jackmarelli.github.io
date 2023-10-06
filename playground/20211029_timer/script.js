function startTimer(duration) {
  let display = document.getElementById("timer");
  let timer = duration;
  if (display.textContent != "00:00:00") {
    timer = duration;
    alert("timer reset to " + duration + " - " + timer);
    clearInverval(refresh);
  }
  let hours, minutes, seconds;
  let refresh = setInterval(function () {
    hours = parseInt(timer / 3600, 10);
    minutes = parseInt((timer % 3600) / 60, 10);
    seconds = parseInt(timer % 60, 10);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = hours + ":" + minutes + ":" + seconds;

    if (--timer < 0) {
      display.textContent = "00" + ":" + "00" + ":" + "00";
    }
  }, 1000);
}
