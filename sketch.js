
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer ;
var iron;
var rubber;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	iron=createSprite(700,400,100,30);
	
	rubber=createSprite(400,400,100,100);
	
	hammer=createSprite(100,400,30,100);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  textSize(35)
        fill("black")
    text("hammer",100,600 ,100, 100)
  textSize(35)
        fill("black")
	text("iron",700,600,100,100)
  textSize(35)
        fill("black")
	text("rubber",400,600,100,100)
    
  
  
  drawSprites();
 
}



