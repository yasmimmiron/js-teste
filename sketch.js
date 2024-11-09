function setup() {
    createCanvas(600, 600);
    background("white");
  }
  
  function draw() {
    stroke("rgb(244,204,247)");
    fill("rgb(244,204,247)");
  
    if(mouseIsPressed){
      rect(mouseX, mouseY, 20, 35);
    }
    
  }