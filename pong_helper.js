var canvas = document.getElementById("pong_canvas");
var context = canvas.getContext("2d");

function setFillStyle(color) {
  context.fillStyle = color;
}

var mouseY = canvas.height / 2;
var escape = false;
var demoProc = 0;

canvas.onmousemove = function(e) {
  mouseY = e.layerY;
};

document.onkeydown = function(e) {
  escape = e.keyCode == 27;
};
