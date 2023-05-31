const scroller = document.querySelector("#works-scroller");
const sampleScrollerElement = document.querySelector("#sampleScrollerElement");
const scrollerElements = document.getElementsByClassName("element");
let sx = 0;
let dx = sx;

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

}
else {
    startUpdeskop();
}

function startUpdeskop() {
    console.log("setting up for desktop");
    console.log('scroller', scroller);

    //scroller
    window.addEventListener("wheel", (e) => {
        if (sx > scroller.scrollWidth - scroller.offsetWidth) {
            sx = scroller.scrollWidth - scroller.offsetWidth;
        } else if (sx < 0) {
            sx = 0;
        } else {
            sx += e.deltaY;
        }
        console.log('sx', sx)
    });

    function render() {
        dx = li(dx, sx, 0.04);
        dx = Math.floor(dx * 100) / 100;
        scroller.scrollLeft = dx;
        window.requestAnimationFrame(render);
    }

    //start recursive rendering
    window.requestAnimationFrame(render);
}
 /*
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
*/

function li(a, b, n) {
    return (1 - n) * a + n * b;
}