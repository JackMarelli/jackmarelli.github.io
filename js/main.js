const _app = {};

_app.helloDiv = document.querySelector("#hello");
_app.hellos = ["Hello", "Ciao", "Hola", "Alo", "Ave", "Salut", "Ahoj", "привіт", "नमस्ते", "Halo", "שלום", "Nadzar", "你好" ,"здрасти", "안녕하세요", "سلام", "ਸਤ ਸ੍ਰੀ ਅਕਾਲ", "Здраво", "สวัสดี", "こんにちは", "გამარჯობა"];
_app.navTag = document.querySelector("nav");
_app.pageName = document.querySelector("#pageName").innerHTML;
_app.defaultMenuIconPath = "assets/icons/menu.svg";

_app.initHelloCarousel = () => {
    if (_app.helloDiv) {
        let helloIndex = Math.floor(Math.random() * _app.hellos.length);;
        setInterval(() => {
            _app.helloDiv.innerHTML = _app.hellos[helloIndex];
            if (helloIndex < _app.hellos.length - 1) {
                helloIndex++
            } else {
                helloIndex = 0;
            }
        }, 800);
    }
}

_app.loadNav = (pageName, pathToMenuIcon) => {
    if (_app.navTag) {

        if(pageName != "Home") {
            pathToMenuIcon = "../" + pathToMenuIcon;
        }
        _app.navTag.innerHTML  = `<div><a id="jm" class="link-dark" href="https://jackmarelli.com">JM</a><a id="jackmarelli" class="link-dark" href="https://jackmarelli.com">Jack Marelli</a><span class="nav-separator">-</span><span>${pageName}</span></div><div><img class="d-none" src="${pathToMenuIcon}" alt="Menu" /></div>`;
        console.log('navbar successfully loaded :)');
    }
}

_app.startUp = () => {
    if (_app.pageName === "Home") {
        _app.initHelloCarousel();
    }
    _app.loadNav(_app.pageName, _app.defaultMenuIconPath);
}

_app.startUp();
