var trex ,trex_running;
var edges;
var ground;
var groundImage;
function preload(){
 
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png")

  groundImage = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running",trex_running);
  trex.scale= 0.7;

  edges = createEdgeSprites();

  ground = createSprite(300, 180, 600, 10)
  ground.addImage("ground", groundImage)
  ground.x = ground.width/2;
  
  
  
}

function draw(){
  background(220);
  ground.velocityX = -8
  if(keyDown("space")){
    trex.velocityY = -10;
  }

  //adding the gravity

  trex.velocityY = trex.velocityY +0.5;
  if (ground.x < 0){
    ground.x = ground.width/2
  }
  trex.collide(ground);
  drawSprites();

}
