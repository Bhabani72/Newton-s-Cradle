class Rope {
    constructor(body1, body2, offsetX, offsetY) {
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB: { x: this.offsetX, y: this.offsetY }

        }
        this.Ropes = Constraint.create(options);
        World.add(world, this.Ropes)
    }
    display() {
        console.log("rope display")
        var pointA = this.Ropes.bodyA.position
        var pointB = this.Ropes.bodyB.position
        strokeWeight(20);
        stroke("black");

        var line1X = pointA.x
        var line1Y = pointA.y
        var line2X = pointB.x + this.offsetX
        var line2Y = pointB.y + this.offsetY
        console.log("points " + line1 )
        line(line1X, line1Y, line2X, line2Y);
        


    }
}