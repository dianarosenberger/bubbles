var myBubble = new Bubble(100, 100);
myBubble.speed.x = 2;
myBubble.speed.y = 2;

setup = function () {
  createCanvas(600, 400);
};

draw = function () {
  background(100);
  myBubble.update();
  myBubble.display();
};
