class ground{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,this.width,this.height,options)
        this.width=width
        this.height=height
        this.image=loadImage("download.jpg")
        World.add(world,this.body)
    }
        display(){
        var pos=this.body.position
        imageMode(CENTER)
        image(this.image,pos.x, pos.y, this.width, this.height)
        }
    }
