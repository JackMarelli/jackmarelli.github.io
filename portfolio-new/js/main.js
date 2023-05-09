const _app = {};

_app.helloDiv = document.querySelector("#hello");
_app.hellos = ["Hello", "Ciao", "Hola", "Alo", "Ave", "Salut", "Ahoj", "Privet", "Namaste", "Halo", "Shalom", "Nadzar", "Nin Hao"];

_app.initHelloCarousel = () => {
    let helloIndex = 0; 
    setInterval(() => {
        _app.helloDiv.innerHTML = _app.hellos[helloIndex];
        if (helloIndex < _app.hellos.length-1){
            helloIndex++
        } else {
            helloIndex = 0;
        }
    }, 800);
}

_app.startUp = () => {
    _app.initHelloCarousel();
}

_app.startUp();