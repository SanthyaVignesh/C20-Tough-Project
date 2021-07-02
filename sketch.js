
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, rack1, rack2;
var rotator1,rotato2,rotator3;
var angle1 = 0, angle2 = 45, angle3 = 90;

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	var staticOption = {
		isStatic : true
	}

	ground = Bodies.rectangle(400,590,1200,20,staticOption);
	rack1 = Bodies.rectangle(200,500,150,20,staticOption);
	rack2 = Bodies.rectangle(600,500,150,20,staticOption);

	World.add(world,ground);
	World.add(world,rack1);
	World.add(world,rack2);

	rotator1 = Bodies.rectangle(width/2,height/2,100,10,staticOption);
	Matter.Body.rotate(rotator1,angle1);

	rotator2 = Bodies.rectangle(width/2,height/2,100,10,staticOption);
	Matter.Body.rotate(rotator2,angle2);

	rotator3 = Bodies.rectangle(width/2,height/2,100,10,staticOption);
	Matter.Body.rotate(rotator3,angle3);

	World.add(world,rotator1);
	World.add(world,rotator2);
	World.add(world,rotator3);

	var ball_options = {
		restitution : 0.7,
		friction : 0.5
	}

	ball1 = Bodies.circle(width/2,60,12,ball_options);
	ball2 = Bodies.circle(width/2,60,12,ball_options);
	ball3 = Bodies.circle(width/2,60,12,ball_options);
	ball4 = Bodies.circle(width/2,60,12,ball_options);
	ball5 = Bodies.circle(width/2,60,12,ball_options);
	ball6 = Bodies.circle(width/2,60,12,ball_options);

	World.add(world,ball1);
	World.add(world,ball2);
	World.add(world,ball3);
	World.add(world,ball4);
	World.add(world,ball5);
	World.add(world,ball6);
  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background("pink");

  Matter.Body.rotate(rotator1,angle1);
  Matter.Body.rotate(rotator2,angle2);
  Matter.Body.rotate(rotator3,angle3);

  console.log(rack1.position.y);
  
  fill("brown");
  rect(ground.position.x,ground.position.y,1200,20);
  rect(rack1.position.x,rack1.position.y,150,20);
  rect(rack2.position.x,rack2.position.y,150,20);

  fill("black");
  push();
  translate(rotator1.position.x,rotator1.position.y);
  rotate(angle1);
  rect(0,0,100,10);
  pop();

  fill("black");
  push();
  translate(rotator2.position.x,rotator2.position.y);
  rotate(angle2);
  rect(0,0,100,10);
  pop();

  fill("black");
  push();
  translate(rotator3.position.x,rotator3.position.y);
  rotate(angle3);
  rect(0,0,100,10);
  pop();
 
  angle1 ++;
  angle2 ++;
  angle3 ++;

  ellipseMode(RADIUS);
  fill("green")
  ellipse(ball1.position.x,ball1.position.y,12,12);
  ellipse(ball2.position.x,ball2.position.y,12,12);
  ellipse(ball3.position.x,ball3.position.y,12,12);
  ellipse(ball4.position.x,ball4.position.y,12,12);
  ellipse(ball5.position.x,ball5.position.y,12,12);
  ellipse(ball6.position.x,ball6.position.y,12,12);


}



