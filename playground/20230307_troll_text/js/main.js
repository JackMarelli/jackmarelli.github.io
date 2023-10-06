import { Point } from "./classes.js"

const t = document.querySelector("#target");

t.addEventListener("mouseover", (e) => {
    let np = newRandPoint(e);

    t.style.left = np.x + "px";
    t.style.top = np.y + "px";
});

function newRandPoint(e) {
    let randX = Math.random() * (window.innerWidth - t.offsetWidth);
    let randY = Math.random() * (window.innerHeight - t.offsetHeight);
    let ret = new Point(randX, randY);

    if (ret.isClose({ x: e.clientX, y: e.clientY }, 30)) {
        ret = newRandPoint(e);
    }

    return ret;
}