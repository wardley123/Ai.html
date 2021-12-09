let myXPos = 100;
let myYPos = 100;
let enemyYpos = 300
let enemyXpos = 100
let speed = 3


let myLeft, myRight, myTop, myBottom;

let eLeft, eRight, eTop, eBottom;

function setup() {
    createCanvas(500, 500);
    noStroke();

}

function draw() {
   
    background(0);
    fill(255, 0, 0);
    rect(myXPos, myYPos, 50, 50);
    
    fill(0, 0, 255)
    rect(enemyXpos,enemyYpos, 50, 50)

    enemyXpos = enemyXpos + speed

    if (enemyXpos > 400){
     enemyXpos =- 3
    }

 


    if (keyIsDown(LEFT_ARROW)) {
        myXPos -= 3;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        myXPos += 3;
    }
    if (keyIsDown(UP_ARROW)) {
        myYPos -= 3;
    }
    if (keyIsDown(DOWN_ARROW)) {
        myYPos += 3;
    }

    myLeft = myXPos - 25
    myRight = myXPos + 25
    myTop = myYPos - 25
    myBottom = myYPos +25

    eLeft = enemyXpos - 25
    eRight = enemyXpos + 25
    eTop = enemyYpos - 25
    eBottom = enemyYpos + 25
    
if(myLeft > eRight || myRight < eLeft || myTop > eBottom || myBottom < eTop){

}
else{
    fill(random(255), random(255), random(255))
    textSize(22)
    text("I'm colliding with my Mortal ENEMY", 40, 480)
}
}

