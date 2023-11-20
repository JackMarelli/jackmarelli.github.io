const mainEl = document.querySelector("main");
const balls = document.querySelectorAll(".ball");

function init() {
  addLines(balls.length - 1);
  const lines = document.querySelectorAll(".line");

  setInterval(() => {
    for (let i = 0; i < lines.length; i++) {
      let currentBallCenterCoords = getCenterOffset(balls[i]);
      let nextBallCenterCoords = getCenterOffset(balls[i + 1]);
      if (i < lines.length) {
      }

      updateLine(
        lines[i],
        currentBallCenterCoords.x,
        currentBallCenterCoords.y,
        nextBallCenterCoords.x,
        nextBallCenterCoords.y
      );
    }
  }, 1);

  for (let i = 0; i < balls.length; i++) {
    balls[i].style.animation = `move 2000ms ${i * 200}ms infinite ease-in-out`;
  }
}

function addLines(n) {
  for (let i = 0; i < n; i++) {
    let newLine = document.createElement("div");
    newLine.className = `line`;
    mainEl.append(newLine);
  }
}

function updateLine(l, x1, y1, x2, y2) {
  let length = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  let angle = Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI);

  l.style.width = length + "px";
  l.style.transform = "rotate(" + angle + "deg)";
  l.style.left = x1 + "px";
  l.style.top = y1 + "px";
}

function getCenterOffset(el) {
  const rect = el.getBoundingClientRect();
  return {
    x: rect.left + rect.width / 2,
    y: rect.top + rect.height / 2,
  };
}

init();
