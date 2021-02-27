let x = 0.01;
let y = 0;
let z = 0;

let sigma = 10;
let rho = 28;
let beta = 8.0 / 3.0;

let points = new Array();


function setup() {
  createCanvas(1600, 840, WEBGL);
 colorMode(HSB);
}

function draw() {
  background('#000001');

  let dt = 0.01;
  let dx = (sigma * (y - x)) * dt;
  let dy = (x * (rho - z) - y) * dt;
  let dz = (x * y - beta * z) * dt;
  x = x + dx;
  y = y + dy;
  z = z + dz;

  points.push(new p5.Vector(x, y, z));

  translate(0, 0, -80);
  let camX = map(mouseX, 0, width, -300, 300);
  let camY = map(mouseY, 0, height, -300, 300);
  camera(camX, camY, (height / 3.0) / tan(PI * 30.0 / 180.0), 0, 0, 0, 0, 1, 0);
  //translate(width/2, height/2);
  scale(5);
  stroke(25);
  noFill();

  let hu = 100;
  beginShape();

  for (let v of points) {
    stroke('#008B8B');
    vertex(v.x, v.y, v.z);
 
  }
  endShape();



}