class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.05,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        console.log("Hiiiiii");
        this.sling.bodyA = null;
    }

    attach(body){
        this.sling.bodyA = body;
    }

    display(){
        
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
           
            
            stroke(255);
            line(pointA.x+25, pointA.y+25, pointB.x, pointB.y);
            
            
            pop();
        }
        
        
    }
    
}