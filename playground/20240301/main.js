const _app = {}

_app.main = document.querySelector("#main");
_app.hueSlider = document.querySelector("#hueSlider")
_app.saturationSlider = document.querySelector("#saturationSlider")
_app.lightnessSlider = document.querySelector("#lightnessSlider")
_app.hue = 0;
_app.saturation = 100;
_app.lightness = 50;

_app.startUp = () => {
    _app.initLines(8);
}

_app.initLines = (n) => {
    _app.main.innerHTML = ""
    for (let i = 0; i < n; i++) {
        let newL = document.createElement("div");
        _app.hue = 0;

        newL.className = "row";
        newL.style.width = "100vw"
        newL.style.height = `${100 / n}vh`
        newL.style.backgroundColor = `hsl(${_app.hue}, 50%, 70%)`

        newL.style.animation = `spring ${5000}ms infinite ${100 * i}ms ease-in-out`

        _app.main.appendChild(newL)
    }
}

_app.rainbowize = () => {
    const lines = document.querySelectorALl(".row");
    lines.forEach(line => {
        let rainbow = setInterval(() => {
            _app.hue = (_app.hue + 1) % 360; // Cycle _app.hue from 0 to 359
            line.style.backgroundColor = `hsl(${_app.hue}, 50%, 70%)`
        }, 10);
    });
}

_app.hueSlider.oninput = (e) => {
    const lines = document.querySelectorAll(".row");
    _app.hue = e.target.value
    lines.forEach(line => {
        line.style.backgroundColor = `hsl(${_app.hue}, ${_app.saturation}%, ${_app.lightness}%)`
    })
}

_app.saturationSlider.oninput = (e) => {
    const lines = document.querySelectorAll(".row");
    _app.saturation = e.target.value
    lines.forEach(line => {
        line.style.backgroundColor = `hsl(${_app.hue}, ${_app.saturation}%, ${_app.lightness}%)`
    })
}

window.onload = () => {
    _app.startUp()
}