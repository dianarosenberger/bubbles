var snowfall = [];

//var myBubble = new Bubble(100, 100);
//myBubble.speed.x = 2;
//myBubble.speed.y = 2;

setup = function () {
  createCanvas(600, 400);
  iterateWithForLoop(500);
};

draw = function () {
  background(100);

  snowfall.forEach(function updateAndDisplay(Snow) {
    Snow.display();
    Snow.update();
  });
};

var iterateWithForLoop = function (numberOfSnow) {
  for (var i = 0; i < numberOfSnow; ++i) {
    snowfall.push (new Snow (random(0, width-10), random(10, height - 10)));
    //updateAndDisplay(array[i]);
  }
};
