var ball = [];
var numBalls = 1;
var ballSize = 50;
var speed;
//sound
var env;
var osc;
var hz;
var delay;
// mouse
var d = 10;
var mouse;

var beat;

function setup() {
  createCanvas(800, 600);
  noCursor();
  beat.play();
  beat.loop();

  for (var i = 0; i < numBalls; i++) {
    ball[i] = new Ball();
  }
  //sound
  osc = new p5.Oscillator();

  env = new p5.Env();
  env.setADSR(0.02, 0.01, 0.5, 0.1);
  env.setRange(0.5, 0);

  //delay = new p5.Delay();
  //delay.process(osc, 0.3, 0.6);



}

function preload() {
  beat = loadSound("beatLoop.mp3");
  mouse = loadSound("mousePing.mp3");
}

function draw() {
  background(110, 110, 230, 90);
  for (var i = 0; i < ball.length; i++) {
    ball[i].display();
    ball[i].move();

    fill(123, 222, 200, 120);
    ellipse(mouseX, mouseY, d, d);
    d = 10;

    if (ball.length > 5) {
      ball.splice(random(0, 4), random(0, 4));
    }
  }
}

function mousePressed() {

  mouse.play();

  ball.push(new Ball());
  osc = new p5.Oscillator();
  if (d == 10) {
    d = 40;
  } else {
    d = 10;
  }

  //this.clicked function
  for (var i = 0; i < ball.length; i++) {
    if (ball[i].clicked()) {
      ball.splice(i, 1);
    }
  }

}