var Car, Wall;
var Speed, Weight;
var Deformation;
function setup() {
createCanvas(1600,400);
Car = createSprite(100, 200, 50, 50);
Car.shapeColour = (0, 255, 0);
Wall = createSprite(1500, 200, 50, 200);
Speed = Math.round(random(55, 90));
Weight = Math.round(random(400, 1500));
Car.velocityX = Speed;
console.log(Deformation);
}

function draw() {
background("black");  
if(Wall.x-Car.x < (Car.width=Wall.width)/2) {
    Car.velocityX = 0;
    Deformation = 0.5 * Weight * Speed * Speed/22500;
    if (Deformation > 180){
        Car.shapeColour = colour(225, 0, 0);
    }
     if (Deformation < 180 && Deformation > 100) {
        Car.shapeColour = colour(230, 230, 0);
    }
    if (Deformation < 100){
        Car.shapeColour = colour(0, 255, 0);
    }
 
}

drawSprites();
}