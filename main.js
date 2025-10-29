let ball;
let paddle;
let bricks = []; 
let rows = 4;
let cols = 8;
let brikcWidth = 60;
let brikcHeigth =20;
let spacing =5;

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
    creatBrikcs();
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
    for (let i = 0; i < bricks.length; i++){
        fill(bricks[i].color)
        rect(bricks[i].x, bricks[i].y, bricks[i].w, bricks[i].h);
    }
}
function mousePressed(){
    ball.vx = random(4, -4)
    ball.vy = -5
}
function creatBrikcs(){
    let totalWidth=cols*(brikcWidth+ spacing)-spacing;
    let startx  = (width - totalWidth)-15;
    for (let r = 0; r <rows; r++) {
        for (let c = 0; c <rows; c++) {
            bricks.push ({
                x: startx + c * (brikcHeigth + spacing),
                y: 80 + r * brikcHeigth,
                w: brikcWidth - spacing,
                h: brikcHeigth -5,
                color:[random(100,255), random(100,255), random(100,255)]
            })
        }  
    }
}