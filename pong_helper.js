var canvas = document.getElementById("pong_canvas");
var context = canvas.getContext("2d");
context.font = "120px Lucida Console";

function setFillStyle(color) {
  context.fillStyle = color;
}

var mouseY = canvas.height / 2;

canvas.onmousemove = function(e) {
  mouseY = e.layerY;
};
