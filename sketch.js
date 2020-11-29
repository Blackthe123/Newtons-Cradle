
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var holder, p1, chain;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	holder = new Holder(400, 150, 350, 20);
	p1 = new Pendulum(500, 250, 30, 30);
	p2 = new Pendulum(450, 250, 30, 30);
	p3 = new Pendulum(400, 250, 30, 30);
	p4 = new Pendulum(350, 250, 30, 30);
	p5 = new Pendulum(300, 250, 30, 30);
	chain = new Chain(p1.body, holder.body, 50*2, 0);
	chain2 = new Chain(p2.body, holder.body, 25*2, 0);
	chain3 = new Chain(p3.body, holder.body, 0*2, 0);
	chain4 = new Chain(p4.body, holder.body, -25*2, 0);
    chain5 = new Chain(p5.body, holder.body, -50*2, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0, 255, 255);


  holder.display();
  p1.display();
  chain.display();
  p2.display();
  chain2.display();
  p3.display();
  chain3.display();
  p4.display();
  chain4.display();
  p5.display();
  chain5.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(p5.body,p5.body.position,{x:-100,y:-100});
	}
}

