function  setup() {
createCanvas(600, 600);
let fillColour;
fillColour = color(random(255), random(255), random(255));
fill(fillColour);
}

function draw() {
    background(255);
rectMode(CENTER);
square(300, 300, 500);
}