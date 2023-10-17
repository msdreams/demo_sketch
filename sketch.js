let img;

function setup() {
  createCanvas(900, 900, WEBGL);
  img = loadImage('cat.jpg')

}

function draw() {
  background(0);
  //normalMaterial();
  
  for (let i = 50; i < 800; i+=120) {
    for (let j = 50; j < 800; j+=120) {
      push() 

      translate(i - 420,j - 420,0);
      rotate(frameCount * 0.01+ i)
      texture (img);
      // stroke(255);

      box(70, 70);

      pop()
    }
  }
}

function keyTyped() {
  if (key === 's') {
    save('png');
  }
}