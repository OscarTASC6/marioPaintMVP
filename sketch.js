let shape;


function setup() {
    createCanvas(500, 500);
    background(250, 0, 0);
    var button = createButton("Reset");
    button.position(510,0);
    button.mousePressed(setup);
    var re = createButton("Rectangle");
    re.position(590,50);
    re.mousePressed(changeToRectangle);
    var cir = createButton("Circle");
    cir.position();
    cir.mousePressed(changetoCircle);
}

function draw() {
    rect(125, 125, 50, 50);
    fill(124, 168, 192);

    circle(325, 325, 100);
    fill(0, 0, 134);
}

function changeToRectangle(){
    shape = "rectangle";
}

function changetoCircle(){
    shape = "circle";
}

function mouseDragged(){
    if (shape === "rectangle"){
        rect(mouseX, mouseY, 50, 50)
        fill(random(0, 255), random(0, 255), random(0, 255))
    } else if (shape === "circle") {
        circle(mouseX, mouseY, 50)
        fill(random(0, 255), random(0, 255), random(0, 255))
    }
}
