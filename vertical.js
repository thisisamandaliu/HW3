var y = 100;
var speedy = 10;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  noStroke();
  background(0, 10);
  ellipse(300, y, 10);

  y = y - speedy;

  if (y == 0) {
    speedy = -speedy;
    fill(random(50, 255), random(50, 255), random(50, 255));
  }


  if (y == height) {
    speedy = -speedy;
    fill(random(50, 255), random(50, 255), random(50, 255));
  }
}
