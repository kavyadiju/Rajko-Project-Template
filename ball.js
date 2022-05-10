class Ball{
    constructor(x, y, width, height){
        var options = {
            restitution: 0.8,
            density: 1,
            friction: 0.7,
        }

        this.body = Bodies.circle(x, y, width, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        fill(180, 0, 250);
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        ellipse( 0, 0, this.width, this.width);  
        pop();
    }

    flingForward(){
      
    }

    flingBack(){
        
    }

    flingUp(){
        Matter.Body.setVelocity(this.body, { x: 0, y: -10 });
        Matter.Body.setAngularVelocity(this.body, random(-0.1,0.1));
    }
}
