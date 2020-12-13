var wall;
var lambo1, lambo2,lambo3, lambo4;
var speed,weight;
var rand;
function setup() {
  createCanvas(1600,400);

  rand=random(10,50);

  wall= createSprite(1500,200,60,400);
  wall.shapeColor=("black");
  speed= random(50,150);
  weight= random(400,1500);

  lambo1= createSprite(100,50,60,30);
  lambo1.shapeColor=("crimson");
  lambo2= createSprite(100,150,60,30);
  lambo2.shapeColor=("lime");
  lambo3= createSprite(100,250,60,30);
  lambo3.shapeColor=("navy");
  lambo4= createSprite(100,350,60,30);
  lambo4.shapeColor=("magenta");
}

function draw() {
  background(0,128,128); 
  lambo1.velocityX=speed-10;
  lambo2.velocityX=speed-20;
  lambo3.velocityX=speed-30;
  lambo4.velocityX=speed-40; 
  if(collision(lambo1,wall)){
    lambo1.velocityX=0;
    lambo2.velocityX=0;
    lambo3.velocityX=0;
    lambo4.velocityX=0;
  }
 
  drawSprites();
}



