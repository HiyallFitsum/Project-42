class Umbrella {
    constructor(x,y){
    var options = {
            isStatic: true
        }
        //this.image = loadAnimation("walking_1.png", "walking_2.png", "walking_3.png", "walking_4.png", "walking_5.png", "walking_6.png", "walking_7.png", "walking_8.png");
        this.image = loadImage("walking_1.png");
        this.body = Bodies.circle(x,y,50,options)
        //this.width = 20;
        //this.height = 300;
        this.radius = 50;
        World.add(world, this.body)

    }

display(){
var pos = this.body.position;
    //translate(pos.x, pos.y);
    //imageMode(CENTER);
    //animation(this.image,pos.x,pos.y,200,200);
    image(this.image,pos.x,pos.y,200,200);
}


}