const Engine = Matter.Engine; 
const World= Matter.World;
 const Bodies = Matter.Bodies; 
 var engine, world; 
 var ground;
 var canvas;
var music;
var box1, box2, box3, box4;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(400,400);
    engine = Engine.create();
     world = engine.world;
  var options = {
      isStatic: true
  }

  ground = Bodies.rectangle(200, 390, 200, 20, options);
  World.add(world,ground);

  box1 = createSprite(350, 380, 80, 20);
  box1.shapeColor = "pink";
  box2 = createSprite(200, 380, 80, 20);
  box2.shapeColor = "blue";
  box3 = createSprite(100, 380, 80, 20);
  box3.shapeColor = "orange";
  box4 = createSprite(100, 380, 80, 20);
  box4.shapeColor = "green";

  movingRect = createSprite(200, 200,80,30); 
  movingRect.shapeColor = "white"; 
  movingRect.debug = true; 
  movingRect.velocityX = 5;
  movingRect.velocityY = -5;


}

function draw() {
    background(rgb(169,169,169));
    Engine.update(engine);
    rectMode(CENTER)
    rect(ground.position.x, ground.position.y, 400, 20);
    edges = createEdgeSprites();
    movingRect.bounceOff(edges);

    if(movingRect.isTouching(box4)){
        movingRect.shapeColor = "green";
    }

    if(movingRect.isTouching(box3)){
        movingRect.shapeColor = "orange";
    }

    if(movingRect.isTouching(box2)){
        movingRect.shapeColor = "blue";
    }

    if(movingRect.isTouching(box1)){
        movingRect.shapeColor = "pink";
    }
    drawSprites();
}
