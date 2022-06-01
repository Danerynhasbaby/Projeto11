var Sea, Ship;


function preload(){
  seaImg = loadImage ("sea.png");
  shipAnimation = loadAnimation ("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
}

function setup(){
  createCanvas(400,400);
  Sea = createSprite (200,200,400,400);
  Sea.addImage("Seaimg", seaImg);
  Sea.scale = 0.3;

  Ship = createSprite (130,200);
  Ship.addAnimation ("Shipanimation", shipAnimation);
  Ship.scale = 0.3;
}

function draw() {
  background("blue");
  Sea.velocityX = -3;

  if (Sea.x < 0) {
    Sea.x = Sea.width/8;
  }

  drawSprites();

 
}
