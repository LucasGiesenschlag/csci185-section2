const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

function setup() {
    createCanvas(canvasWidth, canvasHeight);

    makeCreature(200, 400, 'purple');
    makeCreature(700, 500, 'pink');
    makeCreature(0, 400, 'yellow');


    // for debugging:
    drawGrid(canvasWidth, canvasHeight);
}

function makeCreature(x, y, fillColor, eyeColor='black') {
    // your creature
    fill(fillColor);
    circle(x, y, 300);

    fill(eyeColor);
    ellipse(x - 50, y - 50, 30, 40);
    ellipse(x + 50, y - 50, 30, 40);
}

function mouseClicked() {
    makeCreature(mouseX, mouseY, '#956321', 'green');

    drawGrid(canvasWidth, canvasHeight);
}

function mouseDragged() {
    makeCreature(mouseX, mouseY, 'black', 'cyan');

    drawGrid(canvasWidth, canvasHeight);
}