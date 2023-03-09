const scroller = document.querySelector("#scroller");
const cursorDiv = document.querySelector("#cursorDiv");
const sampleScrollerElement = document.querySelector("#sampleScrollerElement");
let sx = 0;
let dx = sx;


window.addEventListener("wheel", (e) => {
  sx += e.deltaY;
  if (sx > scroller.scrollWidth) {
    sx = scroller.scrollWidth;
  } else if (sx <= 0) {
    sx = 0;
  }
});

window.requestAnimationFrame(render);
function render() {
  //We calculate our container position by linear interpolation method
  dx = li(dx, sx, 0.05);
  dx = Math.floor(dx * 100) / 100;

  if (dx > scroller.scrollWidth - sampleScrollerElement.offsetWidth) {
    dx = scroller.scrollWidth - sampleScrollerElement.offsetWidth;
  } else if (dx <= 0) {
    dx = 0;
  }

  console.log(dx)
  scroller.scrollLeft = dx;
  console.log(scroller.scrollWidth);

  window.requestAnimationFrame(render);
}

function li(a, b, n) {
  return (1 - n) * a + n * b;
}

window.addEventListener("mousemove", (e) => {
  cursorDiv.style.top = `${e.clientY - cursorDiv.offsetWidth / 2}`;
  cursorDiv.style.left = `${e.clientX - cursorDiv.offsetHeight / 2}`;
});