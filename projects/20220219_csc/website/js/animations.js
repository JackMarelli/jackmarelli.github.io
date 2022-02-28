let carousel;
let windowWidth;

window.onload = function() {
    setVariables();
    carousel.scroll({
        top: 0,
        left: 0
    });
    console.log("carousel scroll reset");
}

window.onresize = function() {
    setVariables();
    carousel.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
    console.log("carousel scroll reset");
}


function setVariables() {
    carousel = document.getElementById("items");
    windowWidth = window.innerWidth;
    console.log("variables set");
}

function carouselScrollForward() {
    carousel.scroll({
        top: 0,
        left: carousel.scrollLeft + windowWidth,
        behavior: "smooth"
    });
    console.log("carousel scrolled forward");
}

function carouselScrollBack() {
    carousel.scroll({
        top: 0,
        left: carousel.scrollLeft - windowWidth,
        behavior: "smooth"
    });
    console.log("carousel scrolled back");
}