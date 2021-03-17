
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const  Constraint = Matter.Constraint;

var ground;
var box1, box2,box3;
var support;
var ball;
var rope1;
var gameState = "start";

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
   
	//Create the Bodies Here.
   ground=new Ground(400,430,800,20);
   box1 = new Box(650,400,50,50);
   box2= new Box(650,350,50,50);
   box3 = new Box (650,300,50,50);
   support = new Ground(50,50,20,20);
  
   ball = new Ball(50,350);
   rope1= new Rope(ball.body,{x:20,y:20});



	//Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background("white");
 
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  support.display();

  ball.display();
  rope1.display();
 // drawSprites();
 
}
function mouseDragged(){
   if (gameState!=="play"){
       Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
   }
}


function mouseReleased(){
   rope.fly();
   gameState = "play";
}


