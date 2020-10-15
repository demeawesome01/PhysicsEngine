const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;

var myengine, myworld;
var ground;

var ball; 
var ball2; 
function setup() {
  createCanvas(400,400);
myengine = Engine.create() ; // myengine.world 
myworld = myengine.world;

var options = {
  isStatic : true 
}

ground = Bodies.rectangle(200,350,400,50,options);

World.add(myworld,ground);

console.log(ground.position.x)
console.log(ground.position.y) 
var ballOptions = { 
  restitution : 1.0
 }
ball = Bodies.circle(200,100,50,ballOptions); 
World.add(myworld,ball);  

ball2 = Bodies.circle(250,100,30,ballOptions); 
World.add(myworld,ball2);
}

function draw() {
  background("black");  
  Engine.update(myengine)
  rectMode(CENTER)
 // rect(200,200,80,80)
rect(ground.position.x,ground.position.y,400,50) 

ellipseMode(RADIUS)

ellipse(ball.position.x,ball.position.y,50,50) 

ellipse(ball2.position.x,ball2.position.y,30,30); 


drawSprites();
}