var y1 = 100;
var speedy1 = 10;
var r1=10;
var y2 = 400;
var speedy2 = 16;
var r2=10;
var y3 = 0;
var speedy3 = -8;
var r3=10;

function setup() {
  createCanvas(600, 400);
}


function draw() {
  noStroke();
  background(0);
  ellipse(150, y1, r1);
 ellipse(300, y2, r2);
   ellipse(450, y3, r3);
  y1= y1 - speedy1;
  y2= y2 - speedy2;
   y3= y3 - speedy3;
  if (y1 == 0) {
    speedy1 = -speedy1;
    fill(random(50, 255), random(50, 255), random(50, 255));
      ellipse(150, y1, r1);
     r1=random(5,50);
  }
 if (y2 == 0) {
    speedy2 = -speedy2;
    fill(random(50, 255), random(50, 255), random(50, 255));
   r2=random(5,50);
  }
if (y3 == 0) {
    speedy3 = -speedy3;
    fill(random(50, 255), random(50, 255), random(50, 255));
   r3=random(5,50);
  }

if (y1 == height) {
    speedy1 = -speedy1;
    fill(random(50, 255), random(50, 255), random(50, 255));
  r1=random(5,50);
  }
  
  if (y2 == height) {
    speedy2 = -speedy2;
    fill(random(50, 255), random(50, 255), random(50, 255));
    r2=random(5,50);
  }
   if (y3 == height) {
    speedy3 = -speedy3;
    fill(random(50, 255), random(50, 255), random(50, 255));
    r3=random(5,50);
  }
}
