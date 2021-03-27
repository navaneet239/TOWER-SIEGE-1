class Box {
  constructor(x,y,width,height) {
    var options = {
        isStatic: false
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.image = loadImage("block.png");
    World.add(world, this.body);
    this.visibility = 255;
  }
  display(){
    var pos =this.body.position;
    var speed = this.body.speed;

    if(speed > 3){
      World.remove(world, this.body)
      push()
      translate(this.body.position.x, this.body.position.y);
      tint(255, this.visibility)
      this.visibility = this.visibility - 5
      image(this.image, pos.x, pos.y, 50, 50);
      pop()
    }
    else{
      push()
      translate(this.body.position.x, this.body.position.y);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop()
    }
  }
};