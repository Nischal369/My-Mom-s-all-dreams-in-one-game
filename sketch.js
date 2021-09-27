var path,boy,cash,diamonds,jwellery,island1;
var pathImg,boyImg,cashImg,diamondsImg,jwelleryImg,islandImg;
var treasureCollection = 0;
var cashG,diamondsG,jwelleryG,islandG;

//Game States
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  cashImg = loadImage("iPhone_12_pro_.jpg");
  diamondsImg = loadImage("OIP.jpg");
  jwelleryImg = loadImage("ring.png");
  endImg =loadAnimation("gameOver.png");
  islandImg = loadImage("personal Island.png")
}

function setup(){
  
  createCanvas(windowWidth,windowHeight);
path=createSprite(width/2,200);
path.addImage(pathImg);
path.velocityY = 4;


//creating boy running
boy = createSprite(width/2,height-20,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08;
  
  
cashG=new Group();
diamondsG=new Group();
jwelleryG=new Group();

islandG=new Group();
}

function draw() {

  if(gameState===PLAY){
  background(0);
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  //code to reset the background
  if(path.y > height ){
    path.y = height/2;
  }
  
    createCash();
    createDiamonds();
    createJwellery();
    createIsland();

    if (cashG.isTouching(boy)) {
      cashG.destroyEach();
      treasureCollection=treasureCollection + 800;
    }
    else if (diamondsG.isTouching(boy)) {
      diamondsG.destroyEach();
      treasureCollection=treasureCollection + 650;
      
    }else if(jwelleryG.isTouching(boy)) {
      jwelleryG.destroyEach();
      treasureCollection= treasureCollection + 1050;

    }else if(islandG.isTouching(boy)) {
      islandG.destroyEach();
      treasureCollection= treasureCollection + 1850;
     
    }
  
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Surprises: "+ treasureCollection,width-500,50);
  }

}

function createCash() {
  if (World.frameCount % 200 == 0) {
  var cash = createSprite(Math.round(random(50, width-50),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.4;
  cash.velocityY = 5;
  cash.lifetime = 200;
  cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 320 == 0) {
  var diamonds = createSprite(Math.round(random(50, width-50),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.3;
  diamonds.velocityY = 5;
  diamonds.lifetime = 200;
  diamondsG.add(diamonds);
}
}

function createJwellery() {
  if (World.frameCount % 410 == 0) {
  var jwellery = createSprite(Math.round(random(50, width-50),40, 10, 10));
  jwellery.addImage(jwelleryImg);
  jwellery.scale=0.3;
  jwellery.velocityY = 5;
  jwellery.lifetime = 200;
  jwelleryG.add(jwellery);
  }
}

function createIsland(){
  if (World.frameCount % 530 == 0) {
  var island1 = createSprite(Math.round(random(50, width-50),40, 10, 10));
  island1.addImage(islandImg);
  island1.scale=0.5;
  island1.velocityY = 4;
  island1.lifetime = 200;
  islandG.add(island1);
  }
}
