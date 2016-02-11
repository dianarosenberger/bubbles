
var bubblepit = [];


setup = function () {
  createCanvas(600, 400);
  iterateWithForLoop(500);
};

draw = function () {
  background(100);

  bubblepit.forEach(function updateAndDisplay(bubble) {
    bubble.display();
    bubble.update();
  });
};

var iterateWithForLoop = function (numberOfBubbles) {
  for (var i = 0; i < numberOfBubbles; ++i) {
    bubblepit.push (new Bubble (random(0, width-10), random(10, height - 10)));
    //updateAndDisplay(array[i]);
  }
};
