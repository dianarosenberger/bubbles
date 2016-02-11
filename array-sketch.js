var bubblepit = [];

var updateAndDisplay = function(bubble) {
  bubble.update();
  bubble.display();
};

setup = function() {
  createCanvas(600, 400);
};

draw = function () {
  background(0);

  iterateWithForLoop(bubblepit);
  if (mouseIsPressed) bubblepit.push(new Bubble(mouseX, mouseY));
};

var iterateWithForLoop = function (array) {
  for (var i = 0; i < array.length; ++i) {
    updateAndDisplay(array[i]);
  }
};
