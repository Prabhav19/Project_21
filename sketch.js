var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1500,800);

	var ball_options={
		isStatic:false,
		restitution:0.03,
		friction:0,
		dencity:1.2
	}
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = Matter.Bodies.circle(100,100,50,ball_options)
	World.add(world,ball)
	groundObj=new ground(width/2,670,width,20)	
	leftSide=new ground(1100,600,20,120)
	rightSide=new ground(1300,600,20,120)

	Engine.run(engine);
  
}
function keyPressed(){
	if(keyCode===UP_ARROW) {
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.5,y:-0.5})
	}
}

function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,20,20)
  groundObj.display();
  leftSide.display();
  rightSide.display();
  drawSprites();
 
}



