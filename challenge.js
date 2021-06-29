var ball;
var vx = 2;


function setup(){
 createCanvas(500,500);
 ball  = createSprite(250,250,40,40);


}

function draw(){
 background (14,15,20);

 if(ball.position.x <= 20 || ball.position.x >= 480){
     vx = -vx;
 }
 ball.velocityX = vx;

 drawSprites();
}

