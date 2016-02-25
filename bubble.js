var Snow = function(x, y) {
  this.x = x;
  this.y = y;
  this.speed = {x: 1, y: 1}; // because our speed is represented by an object, we *must* put it in the constructor
};

Snow.prototype = {

  radius: 1,

  update: function() {
    this.x += random(-1, 1);
    this.y += random(0, 2);
    //if(this.y - this.radius <= 0)  this.y = this.radius + random(0, 2);
  },
};
