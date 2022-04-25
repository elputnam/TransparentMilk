//Art work Title generator
var adj;
var noun;
var adjList = [];
var nounList = [];
let i = 0;
let j = 0;

function preload(){
  adjList = loadStrings('words1.txt');
  nounList = loadStrings('words2.txt');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  i = int(random(adjList.length));
  j = int(random(nounList.length));
  colorMode(HSB, 360, 100, 100);
  textFont('VT323');
}

function draw() {
  background(175, 100, 75);
  fill(0, 100, 100);
  textAlign(CENTER);
  textSize(width*.1);
  text(adjList[i], width/2, height/2 - 50);
  text(nounList[j], width/2, height/2 + 50);
  if (frameCount%200==0){
    i = int(random(adjList.length));
    j = int(random(nounList.length));
  }
}

function mousePressed(){
  i = int(random(adjList.length));
  j = int(random(nounList.length));
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}