var bubblepit = [];


setup = function () {
  createCanvas(600, 400);
  drawNumberOfBubbles(500);
};

draw = function () {
  background(100);
for (var i = 0; i < bubblepit.length; ++i) {
  bubblepit[i].display();
  bubblepit[i].update();
}

};

var drawNumberOfBubbles = function (numberOfBubbles) {
  for (var i = 0; i < numberOfBubbles; ++i) {
    bubblepit.push (new Bubble (random(0, width-10), random(10, height - 10)));

  }
};
