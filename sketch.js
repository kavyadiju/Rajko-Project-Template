const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var box1, box;
var ground, ground2, ground3, ground4, obstacle, obstacle2, obstacles;
var c1, c2, c3;


var engine, world, body;


var ball,balls=[];

function setup() {
  //create the canvas
  createCanvas(1200,400);
  
  //setup
  engine = Engine.create();
  world = engine.world;
 
  //create boxes

  wall1 = new Ground(600, 390, 1200,20);
  wall2 = new Ground(600, 10, 1200,20);
  wall3 = new Ground(10, 200, 20,400);
  wall4 = new Ground(1190, 200, 20,400);

  wall5 = new Ground(600, 250, 150,20);
  wall6 = new Ground(520, 180, 20,160);
  wall7 = new Ground(680, 180, 20,160);
 
}

function draw() {
  //set the background
  background(50,50,55);  

  //update the engine
  Engine.update(engine);

   wall1.display()
   wall2.display()
   wall3.display()
   wall4.display()

   wall5.display()
   wall6.display()
   wall7.display()
 
   for(var i=0;i<balls.length;i++)
   {
     balls[i].display();
   }

}

function mousePressed(){
ball=new Ball(random(540,620),20,20,20);
balls.push(ball);
}
