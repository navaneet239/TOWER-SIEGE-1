const Engine     = Matter.Engine;
const World      = Matter.World;
const Bodies     = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground
var stand1, stand2;

var b1, b2, b3, b4,
    b5, b6, b7,
    b8, b9,
    b10;

var b11, b21, b31,
    b41, b51, b61,
    b71, b81;

var b112, b212, b312,
    b412, b512, 
    b612;

var b1123, b2123, b3123,
    b4123;

var b11234, b21234;

var bb1, bb2, bb3, bb4,
     bb5, bb6, 
     bb7, bb8;

var bb11, bb21, bb31, bb41,
    bb51, bb61;

var bb112, bb212, bb312, bb412;

var bb1123, bb2123;

var polygon;

function preeload() {

    
}

function setup(){

    createCanvas(windowWidth,windowHeight);

    engine         = Engine.create();
    world          = engine.world;

    ground         = new Ground(width/2, height, width, 25);
    stand1         = new Ground(width/2 - 15, height/2 + 100, 375, 20);
    stand2         = new Ground(width/2 + 435, height/2, 300, 20);

    //stack 1
        //row 1
    b1 = new Box(width/2 - 150, height/2 + 67.5, 30, 45)
    b2 = new Box(width/2 - 120, height/2 + 67.5, 30, 45)
    b3 = new Box(width/2 - 90, height/2 + 67.5, 30, 45)
    b4 = new Box(width/2 - 60, height/2 + 67.5, 30, 45)
    b5 = new Box(width/2 - 30, height/2 + 67.5, 30, 45)
    b6 = new Box(width/2, height/2 + 67.5, 30, 45)
    b7 = new Box(width/2 + 30, height/2 + 67.5, 30, 45)
    b8 = new Box(width/2 + 60, height/2 + 67.5, 30, 45)
    b9 = new Box(width/2 + 90, height/2 + 67.5, 30, 45)
    b10 = new Box(width/2 + 120, height/2 + 67.5, 30, 45)
        //row 2
    b11 = new Box(width/2 - 120, height/2 + 67.5 - 45, 30, 45)
    b21 = new Box(width/2 - 90, height/2 + 67.5 - 45, 30, 45)
    b31 = new Box(width/2 - 60, height/2 + 67.5 - 45, 30, 45)
    b41 = new Box(width/2 - 30, height/2 + 67.5 - 45, 30, 45)
    b51 = new Box(width/2, height/2 + 67.5 - 45, 30, 45)
    b61 = new Box(width/2 + 30, height/2 + 67.5 - 45, 30, 45)
    b71 = new Box(width/2 + 60, height/2 + 67.5 - 45, 30, 45)
    b81 = new Box(width/2 + 90, height/2 + 67.5 - 45, 30, 45)
        //row 3
    b112 = new Box(width/2 - 90, height/2 + 67.5 - (45+45), 30, 45)
    b212 = new Box(width/2 - 60, height/2 + 67.5 - (45+45), 30, 45)
    b312 = new Box(width/2 - 30, height/2 + 67.5 - (45+45), 30, 45)
    b412 = new Box(width/2, height/2 + 67.5 - (45+45), 30, 45)
    b512 = new Box(width/2 + 30, height/2 + 67.5 - (45+45), 30, 45)
    b612 = new Box(width/2 + 60, height/2 + 67.5 - (45+45), 30, 45)
        //row 4
    b1123 = new Box(width/2 - 60, height/2 + 67.5 - (45+45+45), 30, 45)
    b2123 = new Box(width/2 - 30, height/2 + 67.5 - (45+45+45), 30, 45)
    b3123 = new Box(width/2, height/2 + 67.5 - (45+45+45), 30, 45)
    b4123 = new Box(width/2 + 30, height/2 + 67.5 - (45+45+45), 30, 45)
        //row 5
    b11234 = new Box(width/2 - 30, height/2 + 67.5 - (45+45+45+45), 30, 45)
    b21234 = new Box(width/2, height/2 + 67.5 - (45+45+45+45), 30, 45)

    //stack 2
        //row 1
    bb1 = new Box(width/2 + 330, height/2 - 32.5, 30, 45)
    bb2 = new Box(width/2 + 360, height/2 - 32.5, 30, 45)
    bb3 = new Box(width/2 + 390, height/2 - 32.5, 30, 45)
    bb4 = new Box(width/2 + 420, height/2 - 32.5, 30, 45)
    bb5 = new Box(width/2 + 450, height/2 - 32.5, 30, 45)
    bb6 = new Box(width/2 + 480, height/2 - 32.5, 30, 45)
    bb7 = new Box(width/2 + 510, height/2 - 32.5, 30, 45)
    bb8 = new Box(width/2 + 540, height/2 - 32.5, 30, 45)
        //row 2
    bb11 = new Box(width/2 + 360, height/2 - 32.5 - 45, 30, 45)
    bb21 = new Box(width/2 + 390, height/2 - 32.5 - 45, 30, 45)
    bb31 = new Box(width/2 + 420, height/2 - 32.5 - 45, 30, 45)
    bb41 = new Box(width/2 + 450, height/2 - 32.5 - 45, 30, 45)
    bb51 = new Box(width/2 + 480, height/2 - 32.5 - 45, 30, 45)
    bb61 = new Box(width/2 + 510, height/2 - 32.5 - 45, 30, 45)
        //row 3
    bb112 = new Box(width/2 + 390, height/2 - 32.5 - (45+45), 30, 45)
    bb212 = new Box(width/2 + 420, height/2 - 32.5 - (45+45), 30, 45)
    bb312 = new Box(width/2 + 450, height/2 - 32.5 - (45+45), 30, 45)
    bb412 = new Box(width/2 + 480, height/2 - 32.5 - (45+45), 30, 45)
        //row 4
    bb1123 = new Box(width/2 + 420, height/2 - 32.5 - (45+45+45), 30, 45)
    bb2123 = new Box(width/2 + 450, height/2 - 32.5 - (45+45+45), 30, 45)

    polygon = new Poly(100, 200, 50, 50)

    chain          = new Shot(polygon.body,{x : 100, y : 200})


}

function draw(){
    background("darkRed");
    Engine.update(engine);

    text("Drag the hexagonal stone and release it, to launch it towards the blocks", width/2 - 600, height/2 - 275, fill("black"), textSize(15))

    ground.display();

    stand1.display();
    stand2.display();

    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    b8.display();
    b9.display();
    b10.display();

    b11.display();
    b21.display();
    b31.display();
    b41.display();
    b51.display();
    b61.display();
    b71.display();
    b81.display();

    b112.display();
    b212.display();
    b312.display();
    b412.display();
    b512.display();
    b612.display();

    b1123.display();
    b2123.display();
    b3123.display();
    b4123.display();

    b11234.display();
    b21234.display();

    bb1.display();
    bb2.display();
    bb3.display();
    bb4.display();
    bb5.display();
    bb6.display();
    bb7.display();
    bb8.display();

    bb11.display();
    bb21.display();
    bb31.display();
    bb41.display();
    bb51.display();
    bb61.display();

    bb112.display();
    bb212.display();
    bb312.display();
    bb412.display();

    bb1123.display();
    bb2123.display();

    polygon.display();
    chain.display();


}

function mouseDragged (){

    Matter.Body.setPosition(polygon.body, {x : mouseX, y : mouseY})

}

function mouseReleased (){

    chain.fly();

}

function keyPressed(){

    if(keyCode === 32){
        chain.attach(polygon.body)
    }

}