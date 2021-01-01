
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;


function preload()
{
	
}

function setup() {
	createCanvas(1400, 700);
	engine = Engine.create();
  world = engine.world;
  var render = Render.create({ element: document.body, engine: engine, options: { width: 1200, height: 700, wireframes: false } });
	//Create the Bodies Here.
	roof = new roof(700,40,500,20)
	circle1 = new balls(400,470,100)
	circle2 = new balls(500,470,100)
	circle3 = new balls(600,470,100)
	circle4 = new balls(700,470,100)
	circle5 = new balls(800,470,100)
  ropes1= new Rope(circle1.body,roof.body,-100*2,0);
  ropes2= new Rope(circle2.body,roof.body,-50*2,0);
  ropes3= new Rope(circle3.body,roof.body,-0*2,0);
  ropes4= new Rope(circle4.body,roof.body,50*2,0);
  ropes5= new Rope(circle5.body,roof.body,100*2,0);
  // ropes1= new Rope(roof.body,circle1.body,-100*2,0);
  // ropes2= new Rope(roof.body,circle2.body,-50*2,0);
  // ropes3= new Rope(roof.body,circle3.body,-0*2,0);
  // ropes4= new Rope(roof.body,circle4.body,50*2,0);
  // ropes5= new Rope(roof.body,circle5.body,100*2,0);

	// Engine.run(engine);
  // Render.run(render);
}


function draw() {
  background("grey");
  rectMode(CENTER);
  Engine.update(engine)
  
  roof.display();
  circle1.display();
  circle2.display();
  circle3.display();
  circle4.display();
  circle5.display();
  ropes1.display();
  ropes2.display();
  ropes3.display();
  ropes4.display();
  ropes5.display();

  keyPressed();
  //drawSprites();
 
}
function keyPressed() { 
	if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(circle1.body,circle1.body.position,{x:-50,y:-50}); } 
} 

