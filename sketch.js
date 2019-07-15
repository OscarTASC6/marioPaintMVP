function setup(){
    createCanvas(500,500);
    background(250,0,0);
}

function mouseClicked(){
    rect(mouseX, mouseY, random(50, 100), random(50, 100));
}

function mouseDragged(){
    rect(mouseX, mouseY, random(50, 100), random(50, 100));
}

function draw(){
    rect(125, 125, 50, 50);
    fill(124, 168, 192);

    circle(325, 325, 100);
    fill(0, 0, 134);
    if (mouseIsPressed){
        if (mouseButton === Left){
            clear()
        }
    }
}


