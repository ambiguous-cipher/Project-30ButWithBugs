const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var platform1, platform2;

var p1PosX, p1PosY;

var p2PosX, p2PosY;

var hexIMG;

function preload() {
    hexIMG = loadImage("sprite.png")
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    p1PosX = 1000;
    p1PosY = 200;

    p2PosX = 500;
    p2PosY = 350;

    //The body creator
    platform1 = new Ground(p1PosX, p1PosY, 250, 20);
        box1 = new Box(p1PosX-100, p1PosY-80, 50, 50);
        box2 = new Box(p1PosX-50, p1PosY-80, 50, 50);
        box3 = new Box(p1PosX, p1PosY-80, 50, 50);
        box4 = new Box(p1PosX+50, p1PosY-80, 50, 50);
        box5 = new Box(p1PosX+100, p1PosY-80, 50, 50);

        box6 = new Box(p1PosX-50, p1PosY-130, 50, 50);
        box7 = new Box(p1PosX, p1PosY-130, 50, 50);
        box8 = new Box(p1PosX+50, p1PosY-130, 50, 50);

        box9 = new Box(p1PosX, p1PosY-180, 50, 50);

    platform2 = new Ground(p2PosX, p2PosY, 250, 20);
        box10 = new Box(p2PosX-100, p2PosY-80, 50, 50);
        box11 = new Box(p2PosX-50, p2PosY-80, 50, 50);
        box12 = new Box(p2PosX, p2PosY-80, 50, 50);
        box13 = new Box(p2PosX+50, p2PosY-80, 50, 50);
        box14 = new Box(p2PosX+100, p2PosY-80, 50, 50);

        box15 = new Box(p2PosX-50, p2PosY-130, 50, 50);
        box16 = new Box(p2PosX, p2PosY-130, 50, 50);
        box17 = new Box(p2PosX+50, p2PosY-130, 50, 50);

        box18 = new Box(p2PosX, p2PosY-180, 50, 50);
    
    hex = Bodies.circle(50, 200, 50, {'restitution':0.8,'friction':1.0,'density':1.0})
        World.add(world, hex);

    sling = new SlingShot(hex,{x:200, y:50});

}

function draw(){
    background(0);
    Engine.update(engine);
    strokeWeight(4);
    
    //display the bodies here
    platform1.display();
        box1.display();
        box2.display();
        box3.display();
        box4.display();
        box5.display();
        box6.display();
        box7.display();
        box8.display();
        box9.display();

    platform2.display();
        box10.display();
        box11.display();
        box12.display();
        box13.display();
        box14.display();
        box15.display();
        box16.display();
        box17.display();
        box18.display();

    image(hexIMG, hex.position.x, hex.position.y, 50, 50)

    sling.display();
    
    keyPressed();
}

function mouseDragged(){
    Matter.Body.setPosition(hex, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    console.log("Hii");
    sling.fly();
}

function keyPressed(){
    if (keyCode === 32){
        sling.attach(hex);
    }
}