class Boy{
    constructor(x,y,width,height){
    var options={
    isStatic:true
    }
    // not specifying the width and height in the class as the dustbin needs to be made up of 3 parts
    this.body=Bodies.rectangle(x,y,width,height,options)
    this.width=width
    this.height=height
    World.add(world,this.body)
    }
    display(){
        var pos =this.body.position;
        
        imageMode(CENTER);
        
       image(BoyImage,pos.x, pos.y, 350,500);
    }
  }