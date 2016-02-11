var Bubble = function(x, y) {
  this.x = x;
  this.y = y;

};

Bubble.prototype = {

  radius: 7,

  update: function() {
    this.x += random(-1, 1);
    this.y += random(0, -2);
    if(this.y - this.radius <= 0)  this.y = this.radius + random(0, 2);
  },

  display: function() {
    noStroke();
    fill(102, 217, 255, 100);
    ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
  },


};

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
  //iterateFunctionally(ballpit);
  //iterateWithWhileLoop(ballpit);
  iterateWithForLoop(bubblepit);
  if (mouseIsPressed) bubblepit.push(new Bubble(mouseX, mouseY));
};

var iterateFunctionally = function (array) {
  array.forEach(updateAndDisplay);
};

var iterateWithWhileLoop = function (array) {
  var index = 0;
  while (index < array.length) {
    updateAndDisplay(array[index]);
    ++index;
  }
};

var iterateWithForLoop = function (array) {
  for (var i = 0; i < array.length; ++i) {
    updateAndDisplay(array[i]);
  }
};
