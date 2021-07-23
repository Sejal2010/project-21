
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
function preload()
{
	
}

function setup() {
	engine = Engine.create();
	world = engine.world;
	createCanvas(900,400);
	groundObj=new Ground(width/2,380,width,20);
	leftSide=new Ground(400,320,20,120);
	rightSide=new Ground(500,320,20,120);

	
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:0.8
	}
	//Create the Bodies Here.
	ball=Matter.Bodies.circle(200,200,20,ball_options);
	World.add(world,ball)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 groundObj.display();
 leftSide.display();
 rightSide.display();
 ellipseMode(RADIUS);
 ellipse(ball.position.x,ball.position.y,20,20);
  
 
}
 function keyPressed(){
	 if (keyCode===UP_ARROW){
		 Matter.Body.applyForce(ball,{x:0,y:0},{x:1.5,y:-15.5})
	 }
 }


