var Bubble = function(x, y) {
  this.x = x;
  this.y = y;
};

Bubble.prototype = {

  radius: 7,

  update: function() {
    this.x += random(-1, 1);
    this.y += random(0, -2);

  },

  display: function() {
    noStroke();
    fill(102, 217, 255, 100);
    ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
  },


};
