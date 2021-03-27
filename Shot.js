class Shot{

    constructor(bodyA, pointB){

        var options = {

            bodyA     : bodyA,
            pointB     : pointB,
            stiffness : 0.04,
            length    : 10
    
        }



        this.pointB = pointB
        this.shot   = Constraint.create(options)
        World.add(world, this.shot)

    }

    fly(){

       this.shot.bodyA = null;

    }

    attach(body){

        this.shot.bodyA = body;

    }

    display(){



        if (this.shot.bodyA){
            var pointA = this.shot.bodyA.position
            var pointB = this.pointB
            push()
            strokeWeight(3);
            stroke(48, 22, 8)
            line(pointA.x - 20, pointA.y, pointB.x - 10, pointB.y - 5.25)
            pop()

        }



    
    }

    }
   