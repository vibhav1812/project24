const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground1, paper1;
var ground2, dustbin1,dustbin2,dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

ground1 = new Ground(670);
ground2 = new Ground(650);
paper1 = new Paper(300,620);
dustbin1 = new Dustbin(650,650,200,20);
dustbin2 = new Dustbin(540,635,20,50);
dustbin3 = new Dustbin(740,635,20,50);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  dustbin1.display();
  dustbin2.display();
  dustbin3.display(); 
  paper1.display();
  ground1.display();
  console.log(paper1)
  
}

function keyPressed(){
	if(keyDown(UP_ARROW)){
		Body.applyForce(paper1.body,paper1.body.position,{x:0.1,y:-0.1})
	}
}


