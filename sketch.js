var bullet,wall;
var speed,weight;
var thickness;

function setup() {
  createCanvas(1600,500);

  bullet= createSprite(50,200,50,50);
  wall= createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
  
  speed= random(30,52);
  weight= random(223,321);
  thickness= random(22,83);

   bullet.velocityX= speed;
}

function draw() {
  background(0,0,0);  

 

  if(wall.x-bullet.x<(bullet.width+wall.width)/thickness*thickness*thickness){
    bullet.velocityX=0;
    var damage= 0.5 * width * speed * speed/22509;
    if(damage>10){
      bullet.shapeColor=color(255,0,0)
    }
    
    if(damage<10){
      bullet.shapeColor=color(0,255,0)
    }
  }
  drawSprites();
}