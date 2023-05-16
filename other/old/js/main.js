const scroller = document.querySelector("#scroller");
const cursorDiv = document.querySelector("#cursorDiv");
const sampleScrollerElement = document.querySelector("#sampleScrollerElement");
const scrollerElements = document.getElementsByClassName("img-container");
const letsTalk = document.querySelector("#letsTalk");
let sx = 0;
let dx = sx;

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
}
else {
  //((parseInt(prompt("num?:")) % 30) == 0) ? console.log("divisibile") : console.log("non divisibile");
  /*
  let check3 = false, check5 = false, arr = [3, 2, 3, 5, 1, 5, 6, 4, 4, 5, 5, 6, 3, 4, 6,];
  arr.forEach((num, i) => {
    if (num === 3 || num === 5) {
      ((arr[i + 1]) && (!check3)) ? check3 = (num === 3 && num === arr[i + 1]) : check3 = check3;
      ((arr[i + 1]) && (!check5)) ? check5 = (num === 5 && num === arr[i + 1]) : check5 = check5;
    }
  });
  console.log('check3, check5', check3, check5);
  */
  let arr = [1, 2, 3, 4, 5, 6, 7];
  console.log('arr', arr);
  for (let i = 0; i < (arr.length / 2); i++) {
    [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
  }
  //console.log(arr.reverse());
  console.log('arr', arr);

  startUpdeskop();
}

function startUpdeskop() {
  //console.log("setting up for desktop");

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
  });

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
    scrollerElements[i].addEventListener("mouseenter", (e) => {
      setExploreCursor();
    });
    scrollerElements[i].addEventListener("mouseleave", (e) => {
      setDefaultCursor();
    });
  }


  function render() {
    dx = li(dx, sx, 0.04);
    dx = Math.floor(dx * 100) / 100;
    scroller.scrollLeft = dx;
    window.requestAnimationFrame(render);
  }

  //start recursive rendering
  window.requestAnimationFrame(render);
}

function startUpMobile() {
  //console.log("setting up for mobile");

  //scroller
  window.addEventListener("wheel", (e) => {
    console.log("adsasd");
    if (sx > scroller.scrollHeight - scroller.offsetHeight) {
      sx = scroller.scrollHeight - scroller.offsetHeight;
    } else if (sx < 0) {
      sx = 0;
    } else {
      sx += e.deltaY;
    }
  });


  function render() {
    dx = li(dx, sx, 0.04);
    dx = Math.floor(dx * 100) / 100;
    scroller.scrollTop = dx;
    window.requestAnimationFrame(render);
  }

  window.requestAnimationFrame(render);
}


function li(a, b, n) {
  return (1 - n) * a + n * b;
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

