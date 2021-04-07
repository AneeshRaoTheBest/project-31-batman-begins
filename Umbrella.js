class Umbrella {
    constructor(x,y) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.circle(x,y,100,options);
        this.image = loadImage("Walking Frame/walking_1.png");
        this.x = x;
        this.y = y;
        this.r = 200;
        World.add(world,this.body);
    } 
    display() {
     push();
     translate(this.body.position.x,this.body.position.y);
     imageMode(CENTER);
     image(this.image,0,0,200,200);
     pop();
    }
}