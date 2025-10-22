let ball;
let paddle;

function setup() {
    createCanvas(600, 600);
    ball = {
        x:width/2,
        y:height/2,
        r:10,
        vx: random(-3,3),
        vy: random(-3,3)
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
}