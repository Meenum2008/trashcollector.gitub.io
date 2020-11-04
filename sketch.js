const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1, paperObject,groundObject;
var world;
var b1;
var e;
function preload()
{
b1=loadImage("dustbingreen.png")	 
}

function setup() {
	createCanvas(1270, 570);
		//650


 
	engine = Engine.create();
	world = engine.world;
	
	paperObject=new Paper(20,400,50);

	groundObject=new Ground(width/2,560,width,20);
	  
	 
dustbin1=new Dustbin(1200,480,20,200);
	dustbin2=new Dustbin(1000,480,20,200);
	dustbin3=new Dust(1000,370,200,200);
	dustbin3.image=b1;
    
	rectMode(CENTER);
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("white");
  
  Engine.update(engine)
  paperObject.display();
   
  dustbin1.display();
dustbin2.display();
dustbin3.display();

  groundObject.display();
 
  
  dustbin3.depth=paperObject.depth
  
 
 
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:150,y:-150});

  
	}
	if(keyCode===DOWN_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:-85,y:-85});
	}
}
