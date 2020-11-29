class Pendulum {  
    constructor(x, y, radius){
        var options = {
            friction:0.5,
            density:2,
            isStatic : false,
            restitution:1.2
        }
         this.radius = radius
        this.body = Bodies.circle(x, y, radius, options);
	    World.add(world, this.body);
       
        
   }
   display(){
    fill(255, 0, 255);
    ellipseMode(RADIUS);
    ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
   }
}
