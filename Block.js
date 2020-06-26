class Block {
  constructor(x, y, width, height) {
    var options = {
      restitution: 0.4,
      friction: 0.1,
      //isStatic:true
    };
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    this.Visiblity = 255;
  }

  score(){
    if(this.Visiblity % 50 === 0){
      score=score+20;
      
    }
  }
  display() {
    if(this.body.speed < 3){
      var angle = this.body.angle;
        var pos = this.body.position;
        push();
        fill(228, 75, 125);
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
     }
     else{
       World.remove(world, this.body);
       push();
       this.Visiblity = this.Visiblity - 5;
       tint(255,this.Visiblity);
       score=score+10;
       pop();
       
     }
     
    }
  }

