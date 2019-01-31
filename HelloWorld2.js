
let img;
let ball;
let dukeball;
let dukechap;
let banner;
const burst = 1000;
let angle = 0;
function preload(){
    ball = loadImage('Images2/Ball.png');
    font = loadFont('Images2/bball.ttf');
    fontp = loadFont('Images2/DUKEPLUS.TTF');
    img = loadImage('Images2/duke_basketball.png');
    dukeball = loadImage('Images2/duke-basketball-png-chris-bunn-500.png');
    dukechap = loadImage('Images2/DukeCircle.png');
    banner = loadImage('Images2/banner.png')
}
let x, y;
function setup(){
    createCanvas(800, 800);
    angleMode(DEGREES);
}

function draw(){
    background(0, 48, 135);
    image(img, 0, 0, img.width/2.5, img.height/2.5);
    image(ball, 680, 12, ball.width/30, ball.height/30);
    image(dukeball, -10, 650, dukeball.width/3.2, dukeball.height/3.2);
    image(dukechap, 670, 670, dukechap.width/2.35, dukechap.height/2.35);
    fill(255, 255, 255);
    rect(67,390,10,500);
    rect(400, 730, 500, 10);
    rect(740, 390, 10, 500);
    if(mouseX<100 && mouseY<100){
        textFont(font);
        textSize(55);
        fill(255, 255, 255);
        text("Let's Go Duke!", 205, 700);
    }
    if(mouseX<100 && mouseY>640){
        textFont(font);
        textSize(55);
        fill(255, 255, 255);
        text("GTHC!", 325, 700);
    }
    if(mouseX>650 && mouseY>650){
        textFont(font);
        textSize(55);
        fill(255, 255, 255);
        text("Our House!", 250, 700);
    }
    if(mouseX>650 && mouseY< 100){
        textFont(font);
        textSize(38);
        fill(255, 255, 255);
        text("Fight, Blue Devils fight!", 158, 700);
    }
    if(mouseX<520 && mouseX>300 && mouseY< 100 ){
        image(banner, 300, 590, banner.width/2.35, banner.height/2.35);
    }
    textFont(fontp);
    textSize(100);
    fill(255,255,255);
    text("Duke", 300, 100);
    fill(207, 83, 0)
    ellipse(400,400,300,300);
    translate(400,400);
    rotate(angle);
    fill(255, 255, 255);
    rectMode(CENTER);
    strokeWeight(4);
    ellipse(0,0,300,100);
    textFont(font);
    textSize(27);
    fill(0);
    text("SPALDING", 0, 0);


    angle += 4.5;

    for(let counter=0; counter<50; counter++) {
        fill(255, 255, 255); 
        g = (random(-burst, burst)
              +random(-burst, burst)
              +random(-burst, burst)
              +random(-burst, burst)
              +random(-burst, burst))
        a = (random(-burst, burst)
              +random(-burst, burst)
              +random(-burst, burst)
              +random(-burst, burst)
              +random(-burst, burst))
        
        rect(g, a, 10, 10) // square
    }


}
