class Bob {
    constructor(x, y, radius) {
      var options = {
          'isStatic':false,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.radius = radius
      this.body = Bodies.circle(x, y,radius/2, options);
      World.add(world, this.body);
    }
    
    display(){
      push();
       translate(this.body.position.x,this.body.position.y); 
       rectMode(CENTER);
       strokeWeight(3);
       fill(255,0,255); 
       ellipse(0,0,this.radius,this.radius); 
       pop();
    }
  };