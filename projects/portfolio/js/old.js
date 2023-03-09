const scroller = document.querySelector("#scroller");
let actualScrollX = 0

window.addEventListener("wheel", (e) => {
    console.log('e.deltaY', e.deltaY);
    scroller.scrollLeft += e.deltaY;
    actualScrollX += e.deltaY
});

setInterval(() => {
    scroller.scrollLeft = actualScrollX;
}, 1000);