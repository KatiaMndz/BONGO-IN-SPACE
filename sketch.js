var bongoA;


var bongo1sticker;

function preload(){
var bongo1sticker = loadAnimation ("bongo astronauta.png");

}

function setup() {
  createCanvas(400,400);
  createSprite(400, 200, 50, 50);

  bongoA = createSprite (200,200,20,20);
  bongoA = addAnimation ("1",bongo1sticker);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}