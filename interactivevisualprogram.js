/*function setup(){
    createCanvas(windowWidth,windowHeight);
    noStroke();
}

function draw(){
    background(220);
    fill('gold');
    circle (mouseX,mouseY,50)
    
    if (mouseIsPressed === true){
        fill('red');
        circle (mouseX,mouseY,random(1,800));
        fill('orange');
        circle (mouseX,mouseY,random(1,600));
        fill('blue');
        circle (mouseX,mouseY,random(1,400));
        fill('green');
        circle (mouseX,mouseY,random(1,200));
        fill('yellow');
        circle (mouseX,mouseY,random(1,50));
    }
    
    if (keyIsPressed && key === 'r') {
       fill('red');
       circle (mouseX,mouseY,random(1,800));
       fill('orangered');
       circle (mouseX,mouseY,random(1,600));
       fill('coral');
       circle (mouseX,mouseY,random(1,400));
       fill('gold');
       circle (mouseX,mouseY,random(1,200));
       fill('yellow');
       circle (mouseX,mouseY,random(1,50));
    }

    if (keyIsPressed && key === 'b') {
       fill('darkblue');
       circle (mouseX,mouseY,random(1,800));
       fill('blueviolet');
       circle (mouseX,mouseY,random(1,600));
       fill('mediumslateblue');
       circle (mouseX,mouseY,random(1,400));
       fill('cornflowerblue');
       circle (mouseX,mouseY,random(1,200));
       fill('lightskyblue');
       circle (mouseX,mouseY,random(1,50));
    }

    if (keyIsPressed && key === 'g') {
        fill('darkolivegreen');
        circle (mouseX,mouseY,random(1,800));
        fill('forestgreen');
        circle (mouseX,mouseY,random(1,600));
        fill('limegreen');
        circle (mouseX,mouseY,random(1,400));
        fill('chartreuse');
        circle (mouseX,mouseY,random(1,200));
        fill('greenyellow');
        circle (mouseX,mouseY,random(1,50));
    }
} */
    
rainbowcolorsArray = ['red', 'orange', 'blue', 'green', 'yellow'];
redcolorsArray = ['red', 'orangered', 'coral', 'gold', 'yellow'];
bluecolorsArray = ['darkblue', 'blueviolet', 'mediumslateblue', 'cornflowerblue', 'lightskyblue'];
greencolorsArray = ['darkolivegreen', 'forestgreen', 'limegreen', 'chartreuse', 'greenyellow'];
let sizes;
        
function setup(){
    createCanvas(windowWidth,windowHeight);
    noStroke();
}

function drawrainbowKaleidoscope(mouseX, mouseY, rainbowcolorsArray) {
    sizes = [800, 600, 400, 200, 50];
    for (let i = 0; i < rainbowcolorsArray.length; i++) {
        fill(rainbowcolorsArray[i]);
        circle(mouseX, mouseY, random(1, sizes[i]));
    }
}
    
function drawredKaleidoscope(mouseX, mouseY, redcolorsArray) {
    sizes = [800, 600, 400, 200, 50];
    for (let i = 0; i < redcolorsArray.length; i++) {
        fill(redcolorsArray[i]);
        circle(mouseX, mouseY, random(1, sizes[i]));
    }
}
    
function drawblueKaleidoscope(mouseX, mouseY, bluecolorsArray) {
    sizes = [800, 600, 400, 200, 50];
    for (let i = 0; i < bluecolorsArray.length; i++) {
        fill(bluecolorsArray[i]);
        circle(mouseX, mouseY, random(1, sizes[i]));
    }
}

function drawgreenKaleidoscope(mouseX, mouseY, greencolorsArray) {
    sizes = [800, 600, 400, 200, 50];
    for (let i = 0; i < greencolorsArray.length; i++) {
        fill(greencolorsArray[i]);
        circle(mouseX, mouseY, random(1, sizes[i]));
    }
}

function draw(){
    background(220);
    fill('gold');
    circle(mouseX, mouseY, 50);
            
    if (mouseIsPressed === true) {
        drawrainbowKaleidoscope(mouseX, mouseY, rainbowcolorsArray);
    }
        
    if (keyIsPressed && key === 'r') {
        drawredKaleidoscope(mouseX, mouseY, redcolorsArray);
    }
    
    if (keyIsPressed && key === 'b') {
        drawblueKaleidoscope(mouseX, mouseY, bluecolorsArray);
    }
    
    if (keyIsPressed && key === 'g') {
        drawgreenKaleidoscope(mouseX, mouseY, greencolorsArray);
    }
}

/* Code Description
The idea for this is creating a 'kaleidoscope' and the user can change the RGB colors based on different key presses. The first part of the code that is commented out is how I wrote the original code. It works but it's really long and I wanted to see if I could write it using the arrays we learned in class for the colors. I started by creating my arrays for the different color combinations in the rainbow, red, blue, green kaleidoscopes. Then I created my functions called draw(color)Kaleidoscope for each kaleidoscope. The functions specify the maximum size for each circle in the kaleidoscope. I went back and looked at our For Loop Array Lab to help me create the loop for the circles. I used -colorsArray.length which cycles through the items in my color arrays. Loops are still a bit confusing but its my understanding that as long as i is less than the amount in the array, it will add 1 then exit and restart. The fill tells the circle to cycle through the specified colors in the array -colorsArray[i]. The circle specifies that it should follow the mouse and the diameter should be a random size between 1 and the maximum sizes I set: random(1, sizes[i]). Then I used the same mouseIsPressed and keyIsPressed events. I used the drawKaleidoscope function I created in them and specified which array to use for that key. R key is red, B key is blue, and G key is green. Mouse click is the rainbow.
*/