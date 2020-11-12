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

paper1 = new Paper(300,640);
dustbin1 = new Dustbin(650,650,200,20);
dustbin2 = new Dustbin(540,635,20,70);
dustbin3 = new Dustbin(740,635,20,70);
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
		Body.applyForce(paper1.body,paper1.body.position,{x:52,y:-52})
	}
}


