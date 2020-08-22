/*class Log extends BaseClass {
    constructor(x, y, height, angle) {
      
    this.width = 20;
      this.height = height;
     
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("green");
      fill(255);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };*/
  

  class Log extends BaseClass{
    constructor(x,y,height,angle){
      super(x,y,20,height,angle);
      Matter.Body.setAngle(this.body, angle);
      this.image = loadImage("sprites/wood2.png");
    }
    display(){
     
      super.display();
    }
  }










