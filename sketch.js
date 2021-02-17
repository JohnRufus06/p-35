function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  

  if(keyDown(UP_ARROW)){
    balloon.x = balloon.x -10
  }
  else if(keyDown(RIGHT_ARROW)){
    balloon.x = balloon.x +10
  }
  else if(keyDown(LEFT_ARROW)){
    balloon.x = balloon.x -10
  }
  else if(keyDown(DOWN_ARROW)){
    balloon.x = balloon.x -10
  }
  drawSprites();
}