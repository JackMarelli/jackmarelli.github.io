const _app = {};

_app.helloDiv = document.querySelector("#hello");
_app.hellos = ["Hello", "Ciao", "Hola", "Alo", "Ave", "Salut", "Ahoj", "Privet", "Namaste", "Halo", "Shalom", "Nadzar", "Nin Hao"];
_app.vHeigth = window.innerHeight;

_app.setFoldHeight = () => {
    //console.log("setting fold height");
    let decoHeight = document.querySelector("#fold_deco_img").outerHeight;
    let navHeight = document.querySelector("#nav").outerHeight;
    let customFoldHeight = _app.vHeigth - decoHeight / 2 - navHeight;
    document.querySelector("#fold").style = height = `${customFoldHeight}px`;
}

_app.initHelloCarousel = () => {
    let helloIndex = 0;
    setInterval(() => {
        _app.helloDiv.innerHTML = _app.hellos[helloIndex];
        if (helloIndex < _app.hellos.length - 1) {
            helloIndex++
        } else {
            helloIndex = 0;
        }
    }, 800);
}

_app.startUp = () => {
    _app.initHelloCarousel();
    _app.setFoldHeight();
}

_app.handleResize = () => {
    _app.setFoldHeight();
}

_app.startUp();
window.onresize = () => _app.handleResize();