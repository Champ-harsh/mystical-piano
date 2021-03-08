var canvas,collisionsurf1,collisionsurf2,collisionsurf3,collisionsurf4;
var music,ball,edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(950,800);
   
    ball = createSprite(Math.round(random(20,900)),350,20,20);
    ball.shapeColor = "white";
    ball.velocityY = 6;
    ball.velocityX = (Math.round(random(-5,3)));
    

    collisionsurf1 = createSprite(120,650,200,50);
    collisionsurf1.shapeColor = "red";

    collisionsurf2 = createSprite(collisionsurf1.x+230,650,200,50);
    collisionsurf2.shapeColor = "blue";

    collisionsurf3 = createSprite(collisionsurf2.x+230,650,200,50);
    collisionsurf3.shapeColor = "orange";

    collisionsurf4 = createSprite(collisionsurf3.x+230,650,200,50);
    collisionsurf4.shapeColor = "green";

  bSound = loadSound("music.mp3");



}

function draw() {
    background("black");

    edges =    createEdgeSprites();

  //bounceOff(ball,edges);
  ball.bounceOff(edges);

 if(isTouching(collisionsurf1,ball)){
  bounceOff(collisionsurf1,ball);
  ball.shapeColor = "red";
  bSound.play();
 
 }   

if(isTouching(collisionsurf2,ball)){
    bounceOff(collisionsurf2,ball);
    ball.shapeColor = "blue";
    bSound.play();
}
  
  if(isTouching(collisionsurf3,ball)){
    bounceOff(collisionsurf3,ball);
    ball.shapeColor = "yellow";
    ball.velocityX = 0;
    ball.velocityY = 0;
   
 
   }   
  
  if(isTouching(collisionsurf4,ball)){
    bounceOff(collisionsurf4,ball);
    ball.shapeColor = "green";
    bSound.play();
     
   }   
  

drawSprites();
    //add condition to check if box touching surface and make it box
}
function bounceOff(object1,object2){
    if (object1.x - object2.x < object2.width/2 + object1.width/2
      && object2.x - object1.x < object2.width/2 + object1.width/2) {
        object1.velocityX = object1.velocityX * (-1);
        object2.velocityX = object2.velocityX * (-1);
    }
    if (object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2){
      object1.velocityY = object1.velocityY * (-1);
      object2.velocityY = object2.velocityY * (-1);
  }
  }
  function isTouching(object1,object2){
    if (object1.x - object2.x < object2.width/2 + object1.width/2
      && object2.x - object1.x < object2.width/2 + object1.width/2
      && object1.y - object2.y < object2.height/2 + object1.height/2
      && object2.y - object1.y < object2.height/2 + object1.height/2) {
   
        return true;
  }
  else {
    return false;
  }}
 
