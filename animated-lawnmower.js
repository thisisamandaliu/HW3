function setup() {
  createCanvas(400, 200);
  colorMode(HSB);
  background(184, 20, 100);
}

var x = 0;
var h = 10;
var i = 0;
var d = 20;

function draw() {
  stroke(random(60, 70), 100, 90);
  line(x, height - 10, x + random(-10, 10), height - 10 - random(h));
  noStroke();

  x = x + 10;

  if (x > width) {
    x = random(10);
    h = h + 3;
  }

  if (h > 30) {
    //cut the grass
    fill(184, 20, 100);
    rect(0, 0, width, height - 15);
    //
    i = i + d;
    fill(1, 100, 100);
    rect(i, height - 50, 30, 35);
    if (i >= width - 30) {
      d = -d;
      i = i + d;
      fill(1, 100, 100);
      rect(i, height - 50, 30, 35);
      h = 0;
    }
    if (i <= 0) {
      i = 0;
      d = -d;
      fill(1, 100, 100);
      rect(i, height - 50, 30, 35);
    }
  }


  fill(40, 100, 60);
  rect(0, height - 10, width, 10);
}
