const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var jerry
var tom
var bg

function preload(){
  bg=loadImage("bg.png")
}
function setup() {
  createCanvas(1800,950);
  engine = Engine.create();
    world = engine.world;

    tom=new Tom(100,800)
    jerry=new Jerry(1500,800)
}

function draw() {
  background(bg);  
  Engine.update(engine);
tom.display()
jerry.display()

}
