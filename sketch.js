/*
   __
  / _\ 
 _\ \   Sketch Master 3000™!
 \__/
 
This code is uncommented and really disorganized! I probably will never update it so it will be an eternal mess. You have been warned!
*/
 
let slider, starting_text, brandnew, hourT, link_text;

function setup() {
  Rslider = createSlider(0, 255, 0);
  Rslider.position(10, 10);
  Rslider.style('width', '130px');
  
  Gslider = createSlider(0, 255, 0);
  Gslider.position(10, 30);
  Gslider.style('width', '130px');
  
  Bslider = createSlider(0, 255, 0);
  Bslider.position(10, 50);
  Bslider.style('width', '130px');
  
  Wslider = createSlider(0.5, 10, 5, 0.5);
  Wslider.position(218, 10);
  Wslider.style('width', '130px');
  
  let c = createCanvas(window.innerWidth, window.innerHeight);

  frameRate(30)
  
    R = Rslider.value()
    G = Gslider.value()
    B = Bslider.value()
    W = Wslider.value()
  
  starting_text = "Hold SPACE and your mouse down to draw.\nHold SHIFT and your mouse down to erase." 
  
   link_text = "https://venashial.github.io/Sketch-Master-3000/" 
  
  brandnew = true
    
  mybutton = createButton('Download as image')
  mybutton.position(width - 140, 10);
  mybutton.mousePressed(StartdownloadInProgress)
  downloadInProgress = false
  
  rebutton = createButton('Reset sketch')
  rebutton.position(width - 243, 10);
  rebutton.mousePressed(resetCanvas)
 

  hourT = 0
} 

let h;

function StartdownloadInProgress() {
  downloadInProgress = true
}

function resetCanvas() {
  background(255)
}

function draw() {

if (brandnew == true) {
background(255)
}


if (downloadInProgress == true) {

noStroke()
fill('RGB(200, 200, 200)');
rectMode(CENTER)
rect(width / 2, 0, width, 160)

fill('RGB(40, 40, 40)');
textSize(width / 30);
textAlign(CENTER, CENTER);
text(link_text, width /2, 20 + height/40)

if (hour() > 12) {hourT = hour() - 12} else {hourT = hour()}
if (minute() < 10) {minuteT = "0" + minute()} else {minuteT = minute()}
saveCanvas(canvas, month() + " ⁄ " + day() + " " + hourT + "∶" + minuteT + "∶" + second() + ' Saved Sketch', 'png')

downloadInProgress = false

} else {
}

if (mouseIsPressed == true && keyIsPressed == true && keyCode == SHIFT) {
  for (h = 3; h <= 15; h = h + 1) {
    ellipseMode(RADIUS);
    noStroke()
    
    fill('RGBA(255, 255, 255, 0.5)');
    
    W = Wslider.value()
    ellipse(mouseX, mouseY, W * h, W * h);
    
    brandnew = false
  }
} else if (mouseIsPressed == true && keyIsPressed == true && keyCode == 32) {
  for (h = 3; h <= 15; h = h + 1) {
    ellipseMode(RADIUS);
    noStroke()
    
    R = Rslider.value()
    G = Gslider.value()
    B = Bslider.value()
    fill('RGBA(' + R + ', ' + G + ', ' + B + ', 0.05)');
    
    W = Wslider.value()
    ellipse(mouseX, mouseY, W * h, W * h);
    
    brandnew = false
  }
} else {
    R = Rslider.value()
    G = Gslider.value()
    B = Bslider.value()
    W = Wslider.value()
}
noStroke()
fill('RGB(200, 200, 200)');
rectMode(CENTER)
rect(width / 2, 0, width, 160)

fill('RGB(40, 40, 40)');
textSize(12);
textAlign(CENTER, CENTER);
text(starting_text, width - 125, 50)

strokeWeight(4);
stroke('#EFEFEF');
ellipseMode(RADIUS);
fill('RGBA(' + R + ', ' + G + ', ' + B + ', 1)');
ellipse(180, 40, 30, 30)
  
rectMode(CORNER)
strokeWeight(4);
stroke('#EFEFEF');
fill('#D9D9D9');
rect(222, 34, W * 30, 35, 10)


}