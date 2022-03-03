let carousel;
let windowWidth;
let carouselBookmark;
let carouselImageCount;

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
    carouselBookmark = 0;
    carouselImageCount = 3; //da trasformare in un conteggio degli elementi presenti dentro il div delle immagini

    console.log("variables set");
}

function carouselScrollForward() {

    //TODO: aggiungere un multiplyer che fa scrollare il carosello fino a una certa immagine
    
    if (carouselBookmark < carouselImageCount) {
        carousel.scroll({
            top: 0,
        left: carousel.scrollLeft + windowWidth,
        behavior: "smooth"
    });
    console.log("carousel scrolled forward");
    }
}

function carouselScrollBack() {
    carousel.scroll({
        top: 0,
        left: carousel.scrollLeft - windowWidth,
        behavior: "smooth"
    });
    console.log("carousel scrolled back");
}