class Ball{
    constructor(x,y){
    
        var options={
        isStatic:true
        }
        this.body=Bodies.rectangle(x,y,50,options);
        this.x=x;
        this.y=y;
        this.radius=50;
        
       }
   
       display(){
        var pos=this.body.position;
        rectMode(CENTER);
        fill("red");
        circle(pos.x,pos.y,this.radius);
       }
}