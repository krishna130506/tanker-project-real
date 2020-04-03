class ShootBall{
    constructor(bodyA, pointB){
       
        this.body=Bodies.rectangle(x,y,width,height);
        this.width=width;
        this.height=height;
        this.image=loadImage("assets/sball.png");


    }
attach(){}

shoot(){}


    display(){
        push();
        var pos=this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);
        pop();
    }

}
