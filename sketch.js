var ball;
var mydatabase;

function setup(){

    //naming the database
    mydatabase=firebase.database();

    createCanvas(500,500);
    ball = createSprite(200,200,10,10);
    ball.shapeColor = "red";

    //telling database what to refer
    ballposref=mydatabase.ref('ball/position')

    //listener    event    function
    ballposref.on("value",readOP);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(xval,yval){
    
    mydatabase.ref('ball/position').set({
        x: ball.x + xval,
        y: ball.y + yval
    }
 )
    ball.x = ball.x + xval;
    ball.y = ball.y + yval;
}
function readOP(data){

    posval=data.val();
    ball.x=posval.x;
    ball.y=posval.y;
}