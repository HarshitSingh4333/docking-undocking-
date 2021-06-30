var Spacecraftleft , Spacecraftright , Spacecraftup;
var standingspacecraft;
var mainspaceCraft;
var spacebackground;
var hasDocked = false;




function preload() {
  Spacecraftleft = loadImage("Docking-undocking/spacecraft3.png");
  Spacecraftright = loadImage("Docking-undocking/spacecraft4.png");
  Spacecraftup = loadImage("Docking-undocking/spacecraft2.png");
  standingspacecraft = loadImage("Docking-undocking/spacecraft1.png");
  mainspaceCraft = loadImage("Docking-undocking/iss.png");
  spacebackground = loadImage("Docking-undocking/spacebg.jpg");
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

 iss = createSprite(570,180,10,10);
 iss.addImage(mainspaceCraft)

 Standingspacecraft = createSprite(400,370,10,10)
 Standingspacecraft.addImage(standingspacecraft)
 Standingspacecraft.scale = 0.5


}

function draw() {
  background(spacebackground); 
  
  if(!hasDocked){
    Standingspacecraft.x = 500
    Standingspacecraft.y = 330
  }

  if(keyDown("UP_ARROW")) {
    Standingspacecraft.velocityY = -2;
    Standingspacecraft.addImage(Spacecraftup)
  }
  if(keyDown("DOWN_ARROW")) {
    Standingspacecraft.velocityY = 3;
  Standingspacecraft.addImage(Spacecraftright)
  }
  if(keyDown("LEFT_ARROW")) {
    Standingspacecraft.velocityX = -2
    Standingspacecraft.addImage(Spacecraftleft)
  }
  if(keyDown("RIGHT_ARROW")) {
    Standingspacecraft.velocityX = 3;
    Standingspacecraft.addImage(Spacecraftright)
  }


  if(Standingspacecraft.isTouching(iss)) {
    hasDocked = true
    fill("red")
    textSize(60)
    text("DOCKING SUCCESSFUL!", 100,50)
    
  }


  drawSprites();
}



