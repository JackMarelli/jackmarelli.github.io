const _app = {}
_app.gear = document.querySelector("#gear");
_app.gearImages = document.querySelectorAll(".gear-image");
_app.currentRotation = 0;
_app.sampleGearImage = _app.gearImages[0];
let targetRotation = 0;
let currentRotation = 0;
const imagesCount = _app.gearImages.length;
const anglePerImage = 360 / imagesCount;
let isScrolling;
let snapTarget = null;
_app.mouseIsDown = false;


_app.startUp = () => {
    console.log(_app.gearImages);

    for (let i = 0; i < _app.gearImages.length; i++) {
        const angle = (2 * Math.PI / _app.gearImages.length) * i;
        const radius = _app.gear.offsetWidth / 2;

        //todo: trasformare 2.4 in una variabile calcolata in base alla viewport per centrare sempre le img alla viewport
        const x = radius * Math.cos(angle) + _app.gear.offsetWidth / 2 - _app.sampleGearImage.offsetWidth / 2;
        const y = radius * Math.sin(angle) + _app.gear.offsetHeight / 2 - _app.sampleGearImage.offsetWidth / 2;

        const gearImage = _app.gearImages[i];
        gearImage.style.position = 'absolute';
        gearImage.style.left = `${x}px`;
        gearImage.style.top = `${y}px`;

        const rotation = angle * (180 / Math.PI) + 90;
        gearImage.style.transform = `rotate(${rotation}deg)`;
    }
}

window.addEventListener("mousedown", () => {
    _app.mouseIsDown = true;
    console.log(_app.mouseIsDown);
})

window.addEventListener("mouseup", () => {
    _app.mouseIsDown = false;
    console.log(_app.mouseIsDown);
})

window.addEventListener("wheel", (event) => {
    clearTimeout(isScrolling);
    targetRotation -= event.deltaY * 0.09;
    snapTarget = null;
    isScrolling = setTimeout(() => {
        const closestImageIndex = Math.round(targetRotation / anglePerImage);
        snapTarget = closestImageIndex * anglePerImage;
    }, 100);
});

window.addEventListener("mousemove", (e) => {
    if(_app.mouseIsDown) {
        console.log(e.clientY);
        _app.rotateGear(1);
    }
})

window.requestAnimationFrame(render);

function render() {
    if (snapTarget !== null) {
        targetRotation = li(targetRotation, snapTarget, 0.1);
    }
    currentRotation = li(currentRotation, targetRotation, 0.04);
    currentRotation = Math.floor(currentRotation * 100) / 100;

    _app.gear.style.transform = `rotate(${currentRotation}deg)`;
 
    window.requestAnimationFrame(render);
}

function li(a, b, n) {
    return (1 - n) * a + n * b;
}

_app.rotateGear = (deltaY) => {
    _app.currentRotation += deltaY > 0 ? 5 : -5;
    _app.gear.style.transform = `rotate(${_app.currentRotation}deg)`;
};

_app.startUp();