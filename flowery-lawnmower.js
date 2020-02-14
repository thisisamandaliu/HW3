function setup() {
  createCanvas(400, 200);
  colorMode(HSB);
  background(184,20,100);
}

var x = 0;
var h = 10;

function draw() {
  stroke(random(60, 70), 100, 90);
  line(x, height-10, x+random(-10, 10), height-10-random(h));
  noStroke();

  x = x + 10;

  if (x > width) {
    x = random(10);
    h = h + 3;
  }
  if (h>30){
    fill(random(270,360),100,90);
    ellipse (x,height-random(h),h/20);
  }
  
  if (random(1000) > 999) {
    fill(184,20,100);
    rect(0, 0, width, height-15);
    h = 10;
  }

  fill(40, 100, 60);
  rect(0, height-10, width, 10);
}
