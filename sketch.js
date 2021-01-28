function setup() {
  createCanvas(800,400);
  target=createSprite(400, 200, 50, 50);
  target1=createSprite(350, 150, 50, 50);
  target3=createSprite(600, 100, 50, 50);
  target4=createSprite(100, 100, 50, 50);
  target3.velocityX=-3
}

function draw() {
  background("yellow");  
  target1.x=mouseX
  target1.y=mouseY
  if (touching(target,target1)){
    target.shapeColor="red"
    target1.shapeColor="red"
  }else{
    target.shapeColor="green"
    target1.shapeColor="green"
  }

  if(touching(target3,target4)){
    target3.visible=false
    target4.visible=false
  }else{
     target3.visible=true
    target4.visible=true
  }
  drawSprites();
}

