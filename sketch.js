var bgImg;
var catImg1, catImg2, catImg3, cat;
var mouseImg1, mouseImg2, mouseImg3, mouse;

function preload() {
    //load the images here
    bgImg = loadImage("garden.png");

    catImg1 = loadAnimation("cat1.png");
    catImg2 = loadAnimation("cat2.png","cat3.png");
    catImg3 = loadAnimation("cat4.png");

    mouseImg1 = loadAnimation("mouse1.png");
    mouseImg2 = loadAnimation("mouse2.png","mouse3.png");
    mouseImg3 = loadAnimation("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(800,700,20,20);
    cat.addAnimation("cat",catImg1);
    cat.scale = 0.15;

    mouse = createSprite(200,700,20,20);
    mouse.addAnimation("mouse",mouseImg1);
    mouse.scale = 0.1;
}

function draw() {

    background(bgImg);

    if (keyDown(LEFT_ARROW)){
        mouse.addAnimation("mouseTeasing",mouseImg2);
        mouse.changeAnimation("mouseTeasing");
        mouse.frameDelay = 25;

        cat.addAnimation("catRunning",catImg2);
        cat.changeAnimation("catRunning");

        cat.velocityX = -5;
    }
    //Write condition here to evalute if tom and jerry collide
    if (cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.addAnimation("catHappy",catImg3);
        cat.changeAnimation("catHappy");

        mouse.addAnimation("mouseHappy",mouseImg3);
        mouse.changeAnimation("mouseHappy");

        cat.velocityX = 0;
        cat. x = mouse.x + 80;
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    
}
