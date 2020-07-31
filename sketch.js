
var car ,wall;
var speed,weight;



function setup() {
  createCanvas(1500,400);
 
  speed = random(30,45);
  weight = random(400,1500);

 car = createSprite(50,200,50,50);

 wall = createSprite(1200,200,60,height/2);

car.velocityX = speed;


}

function draw() {
  background(255,255,255);  
  
  
  if(wall.x-car.x<(car.width+wall.width)/2)
  {
  
 car.velocityX = 0;
 var deformation=0.5 * weight *speed*speed/22509

if(deformation>180)
{

car.shapeColor = ("green");
wall.shapeColor = ("blue");

}

if(deformation<180)
{


car.shapeColor = ("red");
wall.shapeColor = ("blue");


}


if(deformation<100)
{

car.shapeColor = ("yellow");
wall.shapeColor = ("blue");

}







  }
  
  

  
  drawSprites();

}