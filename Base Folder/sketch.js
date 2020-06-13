var sun,mercury,venus,earth,mars,jupiter,saturn,uranus,neptune;

function setup(){
canvas=createCanvas(500,400);
sun=createSprite(0,200,50,50);
sun.shapeColor="yellow";
mercury=createSprite(75,200,50,50);
mercury.shapeColor="orange";
venus=createSprite(150,200,50,50);
venus.shapeColor="brown";
earth=createSprite(225,200,50,50);
earth.shapeColor="blue"
mars=createSprite(300,200,50,50);
mars.shapeColor="red"

}

function draw(){
    background("black");
    destroy();
    if(frameCount%20===0){
        sun.scale+=0.1;
    }
    drawSprites();

}

function sunEnlarge(){
    if(World.frameCount%10===0){
        sun.width=sun.width+5;
        sun.height=sun.height+5;

    }
}
function destroy(){
    if(sun.isTouching(mercury)){
        mercury.destroy();
    }
    if(sun.isTouching(venus)){
        venus.destroy();
    }
    if(sun.isTouching(earth)){
        earth.destroy();
    }
    if(sun.isTouching(mars)){
        mars.destroy();
    }
    
}