const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,groundObj,leftSide,rightSide;
var world;
var radius = 70;

function preload(){

	dustbinImg = loadImage("dustbin.png");
	paperImg = loadImage("paper.png");

	//dustbinImg = addImage("dustbin.png");
	//paperImg = addImage("paper.png");

	//dustbin.loadImage("dustbin.png");
	//paper.addImage("paper.png");
	
	//dustbin.loadImage("dustbin.png");
	//paper.loadImage("paper.png");
}


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic:false,
		restitution:0.3,
		density:0.4
	}

	ball = Bodies.circle(260,100,radius/2.6,ball_options);
	World.add(world,ball);

	ground=new Ground(width/2,670,width,20);
	leftSide = new Ground(1100,600,10,120);
	rightSide = new Ground(1270,600,10,120);
	bottomSide = new Ground(1185,650,150,20);

	Engine.run(engine);
  // hello
}


function draw() {
	background(200);
	rectMode(CENTER);
	textSize(20);
	fill(255);
	text("Up Arrow = make the ball in", 10, 30);
  
	textSize(15);
	fill(255);
	text("Down Arrow = make the ball in", 10, 50);
  
	textSize(15);
	fill(255);
	text("Right Arrow = make the ball go right", 10, 65);
  
	textSize(15);
	fill(255);
	text("Left Arrow = make the ball go UP", 10, 80);
  

	ground.display();
	leftSide.display();  
	rightSide.display();
	bottomSide.display();

	
	imageMode(CENTER);

	//image(paperImg,ball.position.y,ball.position.x,radius,radius);
	//image(paperImg,ball.position.x,ball.position.y,radius/2,radius/2);
	//ellipse(ball.position.x,ball.position.y,radius,radius);
	image(paperImg,ball.position.x,ball.position.y,radius,radius);


	
	//image(1185, 570, 200,200);
	//rect(1185, 570, 200,200);
	image(dustbinImg, 1185, 570, 200,200);
	//ellipse(1185, 570, 200,200)



}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(ball,ball.position,{x:45,y:-70});
    
  	}
if (keyCode === DOWN_ARROW) {
	Matter.Body.applyForce(ball,ball.position,{x:35,y:-100});


}
if (keyCode === LEFT_ARROW) {
	Matter.Body.applyForce(ball,ball.position,{x:0,y:-30});


}
if (keyCode === RIGHT_ARROW) {
	Matter.Body.applyForce(ball,ball.position,{x:30,y:-30});


}


}

