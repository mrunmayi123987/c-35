class Box{

    constructor(x,y,width,height){
    
        var options={
        isStatic:false,
        friction:1.5,
        restitution:0.3,
        density:3
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.visibility=255;
        
       }
    
       display(){

        console.log(this.body.speed);
        var pos=this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("blue");
        stroke("black");
        //strokWeight(6);

        rect(0,0,this.width,this.height);
        pop();
       }
}

