class Rope{
    

        constructor(bodyA,pointB){
    
            var options = {
                bodyA:bodyA,
                pointB:pointB,
                stiffness:3,
                length:10
            }
            this.rope=Constraint.create(options);
            World.add(world,this.rope);
        }
    
        attach(body){
            this.rope.bodyA = body;
        }
        
        fly(){
            this.rope.bodyA = null;
        }
    
        
        display(){
            
           

            if(this.rope.bodyA){
            
                var pointA;
                pointA=this.rope.bodyA.position;
                var pointB;
                 pointB=this.pointB;

          push();
    
           strokeWeight(10);
            stroke("green");
            line (pointB.x,pointB.y,pointA.x,pointA.y);
            //fill("white");
            pop();
           }
        }
    }
