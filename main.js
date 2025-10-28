let ball;
let paddle;

function setup() {
    createCanvas(600, 600);
    ball = {
        x:width/2,
        y:height/2,
        r:10,
        vx: 0,
        vy: 0
    };
    paddle ={
        x: width /2,
        y: height - 20,
        w: 100,
        h: 10
    }
}

function draw() {
    background(0);
    ellipseMode(RADIUS);
    fill("white")
    ellipse(ball.x, ball.y, ball.r)
    ball.x += ball.vx
    ball.y += ball.vy
    fill("yellow")
    rectMode(CENTER)
    rect(paddle.x, paddle.y, paddle.w, paddle.h)
    paddle.x=constrain(mouseX, paddle.w/2, width-paddle.w/2)
    if (ball.x - ball.r<0||ball.x+ ball.r>width) ball.vx*=-1;
    if (ball.y - ball.r<0) ball.vy*=-1;
    if (ball.y + ball.r > paddle.y - paddle.h/2 &&
        ball.y + ball.r > paddle.y + paddle.h/2 &&
        ball.x > paddle.x - paddle.w/2 &&
        ball.x < paddle.x + paddle.w/2
    ){
        ball.vy*=-1
       let diff =ball.x - paddle.x
       ball.vx=diff*0.1
    }
}
function mousePressed(){
    ball.vx = random(4, -4)
    ball.vy = -5
}