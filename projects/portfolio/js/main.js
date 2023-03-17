const scroller = document.querySelector("#scroller");
const cursorDiv = document.querySelector("#cursorDiv");
const sampleScrollerElement = document.querySelector("#sampleScrollerElement");
const scrollerElements = document.getElementsByClassName("img-container");
const letsTalk = document.querySelector("#letsTalk");
let sx = 0;
let dx = sx;

//scroller
window.addEventListener("wheel", (e) => {
  moveCursor(e);
  if (sx > scroller.scrollWidth - scroller.offsetWidth) {
    sx = scroller.scrollWidth - scroller.offsetWidth;
  } else if (sx < 0) {
    sx = 0;
  } else {
    sx += e.deltaY;
  }
  console.log(scroller.offsetWidth);
  console.log(sx);
});

window.requestAnimationFrame(render);
function render() {
  dx = li(dx, sx, 0.04);
  dx = Math.floor(dx * 100) / 100;

  //console.log(dx);
  //onsole.log(scroller.scrollWidth);

  scroller.scrollLeft = dx;
  window.requestAnimationFrame(render);
}

function li(a, b, n) {
  return (1 - n) * a + n * b;
}

// Cursor
window.onload = () => {
  setDefaultCursor();
};

window.addEventListener("mousemove", (e) => {
  moveCursor(e);
});

letsTalk.addEventListener("mouseenter", (e) => {
  setLetsTalkCursor();
});
letsTalk.addEventListener("mouseleave", (e) => {
  setDefaultCursor();
});

for (let i = 0; i < scrollerElements.length; i++) {
  console.log("event listeners added");
  scrollerElements[i].addEventListener("mouseenter", (e) => {
    setExploreCursor();
  });
  scrollerElements[i].addEventListener("mouseleave", (e) => {
    setDefaultCursor();
  });
}

function moveCursor(e) {
  cursorDiv.style.top = `${e.clientY - cursorDiv.offsetWidth / 2}`;
  cursorDiv.style.left = `${e.clientX - cursorDiv.offsetHeight / 2}`;
}

function setDefaultCursor() {
  cursorDiv.className = "";
  cursorDiv.classList.add("cursorDefault");
}

function setExploreCursor() {
  cursorDiv.className = "";
  cursorDiv.classList.add("cursorCta");
}

function setLetsTalkCursor() {
  cursorDiv.className = "";
  cursorDiv.classList.add("cursorLetsTalk");
}
