const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var slingshot, ground, box, hexagon;
var backgroundImg

var score;

function preload() {
  getBgIMG();
}

function setup() {
  createCanvas(1200,700);

  engine = Engine.create();
  world = engine.world;

  score =0;

  ground = new Ground(600, 695, 1200, 10);

  ground1 = new Ground(780,300,220,10);

  //level 1
  block1 = new Box(690,275,30,40);
  block2 = new Box(720,275,30,40);
  block3 = new Box(750,275,30,40);
  block4 = new Box(780,275,30,40);
  block5 = new Box(810,275,30,40);
  block6 = new Box(840,275,30,40);
  block7 = new Box(870,275,30,40);

  //level 2
  block8 = new Box(720,235,30,40);
  block9 = new Box(750,235,30,40);
  block10 = new Box(780,235,30,40);
  block11 = new Box(810,235,30,40);
  block12 = new Box(840,235,30,40);

  //level 3
  block13 = new Box(750,195,30,40);
  block14 = new Box(780,195,30,40);
  block15 = new Box(810,195,30,40);

  //level 4 (last)
  block16 = new Box(780,155,30,40);

  /*** NEW PYRAMID ***/

  ground2 = new Ground(780,545,220,10);
  //level 1
  block17 = new Box(690,520,30,40);
  block18 = new Box(720,520,30,40);
  block19 = new Box(750,520,30,40);
  block20 = new Box(780,520,30,40);
  block21 = new Box(810,520,30,40);
  block22 = new Box(840,520,30,40);
  block23 = new Box(870,520,30,40);

  //level 2
  block24 = new Box(720,480,30,40);
  block25 = new Box(750,480,30,40);
  block26 = new Box(780,480,30,40);
  block27 = new Box(810,480,30,40);
  block28 = new Box(840,480,30,40);

  //level 3
  block29 = new Box(750,440,30,40);
  block30 = new Box(780,440,30,40);
  block31 = new Box(810,440,30,40);

  //level 4 (last)
  block32 = new Box(780,400,30,40);

  hexagon = new Hexagon(200, 197, 40);

  slingshot = new SlingShot(hexagon.body, {x: 200, y: 197});

  
}

function draw() {
  if (backgroundImg) {
    background(backgroundImg); 
  }

  noStroke();
  textSize(35);
  fill("white");
  text("Score " + score, width-300, 50);

  Engine.update(engine);

  ground.display();

  block1.display();
  block1.score();

  block2.display();
  block2.score();

  block3.display();
  block3.score();
  
  block4.display();
  block4.score();

  block5.display();
  block5.score();

  block6.display();
  block6.score();

  block7.display();
  block7.score();


  block8.display();
  block8.score();

  block9.display();
  block9.score();

  block10.display();
  block10.score();

  block11.display();
  block11.score();

  block12.display();
  block12.score();

  block13.display();
  block13.score();

  block14.display();
  block14.score();

  block15.display();
  block15.score();

  block16.display();
  block16.score();

  block17.display();
  block17.score();

  block18.display();
  block18.score();

  block19.display();
  block19.score();

  block20.display();
  block20.score();

  block21.display();
  block21.score();

  block22.display();
  block22.score();

  block23.display();
  block23.score();

  block24.display();
  block24.score();

  block25.display();
  block25.score();

  block26.display();
  block26.score();

  block27.display();
  block27.score();

  block28.display();
  block28.score();

  block29.display();
  block29.score();

  block30.display();
  block30.score();

  block31.display();
  block31.score();

  block32.display();
  block32.score();

  ground1.display();
  ground2.display();

  hexagon.display();

  slingshot.display();

}

function mouseDragged(){
  Matter.Body.setPosition(hexagon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed() {
  if (keyCode === 32) {
      slingshot.attach(hexagon.body);
      Matter.Body.setPosition(hexagon.body, {x:200, y:197})
  }
}

async function getBgIMG(){
  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var daytime = responseJSON.datetime;
  var hour = daytime.slice(11,13);
  if (hour >= 06 && hour <= 19) {
      bg = ("image/skyBlue.png");
  }else{
      bg = ("image/black.jpg");
  }
  backgroundImg = loadImage(bg);
}
