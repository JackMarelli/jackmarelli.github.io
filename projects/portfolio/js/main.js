const scroller = document.querySelector("#scroller");
const cursorDiv = document.querySelector("#cursorDiv");
const sampleScrollerElement = document.querySelector("#sampleScrollerElement");
const scrollerElements = document.getElementsByClassName("img-container");
let sx = 0;
let dx = sx;

window.addEventListener("wheel", (e) => {
  moveCursor(e);
  if (sx > scroller.scrollWidth) {
    sx = scroller.scrollWidth;
  } else if (sx < 0) {
    sx = 0;
  } else {
    sx += e.deltaY;
  }
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
  cursorDiv.classList.add("cursorDefault");
}

window.addEventListener("mousemove", (e) => {
moveCursor(e)});

for (let i = 0; i < scrollerElements.length; i++) {
  console.log("event listeners added")
  scrollerElements[i].addEventListener("mouseenter", (e) => {
    console.log("fired " + e.type);
    cursorDiv.classList.add("cursorCta");
    cursorDiv.classList.remove("cursorDefault");
  });
  scrollerElements[i].addEventListener("mouseleave", (e) => {
    console.log("fired " + e.type);
    cursorDiv.classList.add("cursorDefault");
    cursorDiv.classList.remove("cursorCta");
  });
}

function moveCursor(e) {
  cursorDiv.style.top = `${e.clientY - cursorDiv.offsetWidth / 2}`;
  cursorDiv.style.left = `${e.clientX - cursorDiv.offsetHeight / 2}`;
}