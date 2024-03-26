// Controls:
// +/- = Framerate
// s = Change shape
// r = Rotate
// l = Lines
// i = images
// backspace = delete

let f = 24;
let s = 1;
let l = 5;
let i = 0;

let img;
let img2;
let img3;


//loads images
function preload() {
  img = loadImage("Fanvy.jpg");
  img2 = loadImage("SwirlyDurly.jpg");
  img3 = loadImage("Doge.png");
}

function setup() {
  createCanvas(1250, 1070, WEBGL);
  normalMaterial();
  background(0);
}

//Controls
function keyTyped() {
  //toggles shapes
  if (key === "s") {
    if (s === 1) {
      s = 2;
    } else {
      if (s === 3) {
        s = 4;
      } else {
        if (s === 2) {
          s = 3;
        }
        if (s === 4) {
          s = 1;
        }
      }
    }
  }

  //toggles lines
  if (key === "l") {
    if (l === 5) {
      l = 0;
    } else {
      if (l == 0) {
        l = 5;
      }
    }
  }

  //toggle texture
  if (key === "i") {
    if (i === 0) {
      i = 1;
    } else {
      if (i == 2) {
        i = 3;
      } else {
        if (i == 1) {
          i = 2;
        }
        if (i == 3) {
          i = 0;
        }
      }
    }
  }

  // makes sure instance only happens once per press
  return false;
}

//Drawing
function draw() {
  //line
  strokeWeight(l);
  //lets Cube "Draw"
  stroke(1);
  //Lets Cube Drag
  orbitControl();
  //smoothness
  frameRate(f);

  //Reduce Framerate
  if (f > 1) {
    if (keyIsDown(109) || keyIsDown(189)) {
      f -= 1;
    }
  }
  //Increase Framerate
  if (keyIsDown(107) || keyIsDown(187)) {
    f += 1;
  }

  //Textures
  if (i == 1) {
    texture(img);
  }
  if (i == 0) {
    normalMaterial();
  }
  if (i == 2) {
    texture(img2);
  }
  if (i == 3) {
    texture(img3)
  }

  //Rotate when "r" is pressed
  push();
  rotateY(PI / 6);
  stroke(255);
  //rotate box
  if (keyIsDown(82)) {
    rotateZ(frameCount * 0.05);
    rotateX(frameCount * 0.05);
    rotateY(frameCount * 0.05);
  }

  //create shapes
  if (mouseIsPressed) {
    //box
    if (s == 1) {
      box(mouseX + 100 / 2, mouseY + 100 / 2);
    }
    //Torus
    if (s == 2) {
      torus(mouseX / 2, mouseY / 2);
    }
    //cone
    if (s == 3) {
      cone(mouseX + 25 / 2, mouseY + 25 / 2);
    }
    //ellipsoid
    if (s == 4) {
      ellipsoid(mouseX + 50 / 2, mouseY + 5 / 2);
    }
  }
  pop();
}

function keyReleased() {
  //Delete
  if (key === "Backspace") {
    background(0);
  }
  return false;
}

//Resources I used to create this project are listed below:
  //KeyIsDown -         https://p5js.org/reference/#/p5/keyIsDown
  //KeyTyped -          https://p5js.org/reference/#/p5/keyTyped
  //KeyReleased -       https://p5js.org/reference/#/p5/keyReleased
  //Keycode Finder -    https://www.toptal.com/developers/keycode
  //Orbit Control -     https://p5js.org/reference/#/p5/orbitControl
  //3D Shapes -         https://p5js.org/examples/3d-geometries.html
  //Materials -         https://p5js.org/examples/3d-materials.html
  //Load Image -        https://p5js.org/reference/#/p5/loadImage
