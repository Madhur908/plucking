var BoyImage,Treeimage,mangoImage,stoneimage
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint

function preload()
{
BoyImage=loadImage("boy.png")
Treeimage=loadImage("tree.png")	
mangoImage=loadImage("mango.png")
stoneimage=loadImage("stone.png")
}

function setup() {
  createCanvas(1000, 900);
  alert("made by Madhur")


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  Ground=new ground(500,300,1000,600)
  Stone=new stone(50,350,100)
  mangotree=new tree(600,300,600,600)
 
  stoneinhand=new SlingShot(Stone.body,{x:90,y:380})
    boy=new Boy(220,490,150,200)
   
    mango1=new mango(430,310,40,40)
    mango2=new mango(470,310,40,40)
    mango3=new mango(690,300,40,40)
    mango4=new mango(690,150,40,40)
    mango5=new mango(720,100,40,40)
    mango6=new mango(500,100,40,40)
   // mango7=new mango(600,230,40,40)
    mango8=new mango(550,270,40,40)
	Engine.run(engine);
}


function draw() {
 
  
  collision=Matter.SAT.collides(mango1.body,Stone.body)
  collis=Matter.SAT.collides(mango2.body,Stone.body)
  collision3=Matter.SAT.collides(mango3.body,Stone.body)
  collision4=Matter.SAT.collides(mango4.body,Stone.body)
  rectMode(CENTER);
  background(200);
  
  Ground.display()
  boy.display()
 mangotree.display()
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  //mango7.dsiplay()
  mango8.display()
  Stone.display()
  stoneinhand.display()
  
  


  if(collision.collided){

  Matter.Body.setStatic(mango1.body,false)
  }
 
  if(collis.collided){
    Matter.Body.setStatic(mango2.body,false)
  }
   if(collision3.collided){
     Matter.Body.setStatic(mango3.body,false)
   }

   if(collision4.collided){
     Matter.Body.setStatic(mango4.body,false)
   }
}
  
  
  function mouseDragged(){
    Matter.Body.setPosition(Stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  stoneinhand.fly();
}







