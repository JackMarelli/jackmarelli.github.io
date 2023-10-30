const _app = {};
_app.inElement = document.querySelector("#in");
_app.resultContainer = document.querySelector("#container");
_app.circleRadius = _app.resultContainer.clientWidth / 2;
console.log(_app.circleRadius);

_app.inElement.addEventListener("input", (e) => {
  const text = e.target.value;
  const textArr = [...text];
  _app.resultContainer.innerHTML = "";
  console.log(textArr);

  for (let i = 0; i < textArr.length; i++) {
    let newChar = document.createElement("div");
    let r = (360 / textArr.length) * i;
    newChar.textContent = textArr[i];
    newChar.style.transform = `rotate(${r + 90}deg)`;
    newChar.style.transformOrigin = "center center"
    newChar.style.position = "absolute";
    newChar.style.fontSize = "70px";

    let angle = (i / textArr.length) * 2 * Math.PI;
    let x = _app.circleRadius * Math.cos(angle);
    let y = _app.circleRadius * Math.sin(angle);

    newChar.style.left = `${x + _app.circleRadius}px`;
    newChar.style.top = `${y + _app.circleRadius}px`;

    _app.resultContainer.append(newChar);
  }
});

_app.startUp = () => {};
