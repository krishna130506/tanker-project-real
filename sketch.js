// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine
135,200
*/
var tanker,ground,sBall,cBall;

function setup() {
  var canvas=createCanvas(600,400);
    engine = Engine.create();
    world = engine.world;
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    ground=new Ground(300,400,600,20);

    tanker=new Tanker();

//sBall=new ShootBall(tanker,{x:100,y:50});
}

function draw() {
    background(255);
    Engine.update(engine);
    ground.display();
    stroke(0);
    fill(255,255,255);
    tanker.display();
    
  //  sBall.display();
// Remember to update the Matter Engine and set the background.
}


/*function keyReleased() {
    if(keyCode===32){
        cBall=new CanonBall(tanker.x,200,20,20);
cBall.velocityY=-10;
cBall.velocityX=0;
cBall.display();

    }
    // Call the shoot method for the cannon.
}*/