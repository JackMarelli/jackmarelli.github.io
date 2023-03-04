const _app = {};

//alphabetical order
_app.canvasElement = document.querySelector("#canvasElement");
_app.colors = ["#FF0000", "#00FF00", "#0000FF", "FFFF00"];
_app.ctx = _app.canvasElement.getContext("2d");
_app.divisions = 100;
_app.matrix = [];
_app.size = 500;
_app.step = _app.size / _app.divisions;

_app.getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };
  

_app.setup = () => {
  //get canvas and ctx

  for (var i = 0; i < _app.divisions; i++) {
    _app.matrix[i] = new Array(_app.divisions);
  }

  //fill matrix
  _app.stepX = 0;
  _app.stepY = 0;
  for (let i = 0; i < _app.divisions; i++) {
    for (let j = 0; j < _app.divisions; j++) {
      _app.matrix[i][j] = [_app.stepX, _app.stepY];
      _app.stepX += _app.step;
    }
    _app.stepX = 0;
    _app.stepY += _app.step;
  }
};

_app.randomizeMatrix = () => {
  for (let i = 0; i < _app.divisions; i++) {
    for (let j = 0; j < _app.divisions; j++) {
      _app.ctx.fillStyle = _app.colors[_app.getRandomInt(_app.colors.length -1)];
      _app.ctx.fillRect(
        _app.matrix[i][j][0],
        _app.matrix[i][j][1],
        _app.step,
        _app.step
      );
    }
  }
};

_app.setup();
_app.randomizeMatrix();
console.log(_app.matrix)