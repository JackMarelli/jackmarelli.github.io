import Unit from "./classes.js"
import "./utils.js"
import { getRandomHexColor } from "./utils.js";

const _app = {};

//alphabetical order
_app.canvasElement = document.querySelector("#canvasElement");
_app.colors = ["#FF0000", "#00FF00", "#0000FF", "FFFF00"];
_app.ctx = _app.canvasElement.getContext("2d");
_app.divisions = 10;
_app.matrix = [];
_app.size = 500;
_app.step = _app.size / _app.divisions;

_app.setup = () => {
  //create matrix
  for (var i = 0; i < _app.divisions; i++) {
    _app.matrix[i] = new Array(_app.divisions);
  }

  //fill matrix
  _app.stepX = 0;
  _app.stepY = 0;
  for (let i = 0; i < _app.divisions; i++) {
    for (let j = 0; j < _app.divisions; j++) {
      _app.matrix[i][j] = new Unit(_app.stepX, _app.stepY, "#000000");
      _app.stepX += _app.step;
    }
    _app.stepX = 0;
    _app.stepY += _app.step;
  }
};

_app.drawUnit = (u) => {
  _app.ctx.fillStyle = u.color;
  _app.ctx.fillRect(
    u.x,
    u.y,
    _app.step,
    _app.step
  );
}

_app.randomizeMatrix = () => {
  console.log("randomizing matrix");
  let stepX = 0, stepY = 0;
  for (let i = 0; i < _app.divisions; i++) {
    for (let j = 0; j < _app.divisions; j++) {
      _app.matrix[i][j] = new Unit(stepX, stepY, getRandomHexColor());
      stepY += _app.step;
      _app.drawUnit(_app.matrix[i][j]);
    }
    stepY = 0;
    stepX += _app.step;
  }
};

_app.initializeMatrix = () => {
  _app.color1 = getRandomHexColor()
  _app.color2 = getRandomHexColor()
  let stepX = 0;
  let stepY = 0;

  //left side
  for (let i = 0; i < _app.divisions / 2; i++) {
    for (let j = 0; j < _app.divisions; j++) {
      _app.matrix[i][j] = new Unit(stepX, stepY, _app.color1);
      stepY += _app.step;
      _app.drawUnit(_app.matrix[i][j]);
    }
    stepY = 0;
    stepX += _app.step;
  }

  //right side
  for (let i = 0; i < _app.divisions / 2; i++) {
    for (let j = 0; j < _app.divisions; j++) {
      _app.matrix[i][j] = new Unit(stepX, stepY, _app.color2);
      stepY += _app.step;
      _app.drawUnit(_app.matrix[i][j]);
    }
    stepY = 0;
    stepX += _app.step;
  }

}

_app.infect = () => {
  for (let i = 0; i < _app.divisions; i++) {
    for (let j = 0; j < _app.divisions; j++) {
      if ((_app.matrix[i + 1][j] != undefined)) {
        if (_app.matrix[i][j].color != _app.matrix[i + 1][j].color){
          if (!(_app.matrix[i][j].fight(_app.matrix[i + 1][j]))) {
            _app.drawUnit(_app.matrix[i][j]);
          }
        }
      }
    }
  }
}

_app.setup();
_app.initializeMatrix();
_app.infect();
