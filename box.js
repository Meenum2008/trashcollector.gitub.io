class Dust {
    constructor(x, y, width, height) {
      var options = {
         isStatic:true,
         scale:0.3
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
    
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(4)
      stroke("brown")
     
     
      fill("brown")
      imageMode(RADIUS);
      image(this.image,0,0,this.width,this.height);
       
      pop();
    }
  }
   