const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 
const colors = ["#08415c", "#e1f0c4", "#6bab90", "#55917f", "#5e4c5a"];

function randomFloat(min, max) { 
	// min and max included 
	return Math.random() * (max - min) + min;
}

function randomInt(min, max) { 
	// min and max included 
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    frameRate(2);
    
    fill("#08415c");

    // draw a random circle:
let i = 0;
while (i < 100) {
    fill("orange");
    let x = randomInt(0, canvasWidth);
    let y = randomInt(0, canvasHeight);
    let size = randomFloat(10, 125);
    square(x, y, size);

    fill("yellow");
    let x1 = randomInt(0, canvasWidth);
    let y1 = randomInt(0, canvasHeight);
    let size1 = randomFloat(25, 125);
    circle(x1, y1, size1);
    ++i;

    fill("green")
    let coefX = randomFloat(-3, 3);
    let coefY = randomFloat(-3, 3);
    line(x, y, x + size * coefX, y + size * coefY);

    fill("purple")
    triangle(
        x, y - size / 2, 
        x - size / 1.5, y + size / 2,
        x + size / 6, y + size / 8
    );
}
}


// // anything that you want to animate goes in this function:  
 //function draw() {
 ///    clear();

 //}


 
// // 1. draw a random square:
// square(x, y, size);

// // 2. draw a random triangle:

// // 3. draw a random line:
 

