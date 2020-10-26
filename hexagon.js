class Hexagon{
    constructor(x, y, radius) {
        var options = {
            'restitution':0.3,
            'friction':1.0,
            'density':10.0
        }
        this.body = Bodies.circle(x, y, radius/3, options);
        this.radius = radius;
        this.image = loadImage("image/hexagon.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        //ellipseMode(CENTER);
        //ellipse(0,0,this.radius,this.radius);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius, this.radius);
        pop();
      }
}