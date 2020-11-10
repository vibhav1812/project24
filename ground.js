class Ground{
    constructor(y){
        var options={
            isStatic : true
        }
        this.body = Bodies.rectangle(400,y,800,20,options);
        World.add(world,this.body);
       
    }
display(){
    var pos = this.body.position;
rectMode(CENTER)
fill("yellow")
rect(pos.x,pos.y,800,20)

}
}