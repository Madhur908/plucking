class stone{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            density:16000
            
        }
        this.body=Bodies.circle(x,y,radius,options)
       
        
       
        this.radius=radius
         
        World.add(world,this.body)
    }
    display(){
        
     
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(stoneimage, 0, 0, this.radius,50,50);
        pop();
        

    }
}