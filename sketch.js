var fixedRect, movingRect;
var fastrect
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  fastrect=createSprite(100,300,50,50)
 

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);
  
  // just expriment with the program  
  fastrect. y=World.mouseY
  fastrect.x=World.mouseX

  //not experiment
  bounceoff(movingRect,fixedRect)


  // again just expreiment with the program
  bounceoff(fastrect,fixedRect)
  bounceoff(fastrect,movingRect)
  

  drawSprites();
}




