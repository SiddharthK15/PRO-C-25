
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(800, 700);

	
	

	engine = Engine.create();
	world = engine.world;
	ground = new Ground(400,650,800,20);
	
	box1 = new Box(600,550,200,200);
	

	paper1 = new Paper(50,300,50,50);
	
	Engine.run(engine);
  
}


function draw() {

  background(100);
  ground.display();
  box1.display();
 
  paper1.display();
  

  
}

function keyPressed(){
	if(keyCode === RIGHT_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:700,y:-800})
	}
	if(keyCode === LEFT_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:-700,y:-800})
	}
}

