class balls{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill("green")
        ellipseMode(CENTER)
        ellipse(500,400,this.r,this.r)
        ellipse(600,400,this.r,this.r)
        ellipse(700,400,this.r,this.r)
        ellipse(800,400,this.r,this.r)
        ellipse(900,400,this.r,this.r)
        pop();
      }
}