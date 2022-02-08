barValues = [];

function preload() {
  table = loadTable("cars_barchart.csv", "csv", "header");
}

function setup() {
  createCanvas(700, 400);
  numRows = table.getRowCount();
  numColumns = table.getColumnCount();
}

function draw() {
  background(240);

  stnum = 50;
  for (var i = 0; i < 10; i++) {
    //put lines
    fill("black");
    stroke("0");
    text("Horsepower", 380, 25);
    fill("grey");

    text(stnum + i * 50, i * 50 + 168, 45);
    //draw grid
    fill("grey");
    stroke(200);
    rect(i * 50 + 175, 50, 0.15, 290);
  }

  for (var i = 0; i < numRows; i++) {
    //Car Brands
    fill(90, 150, 120);
    stroke("0");
    textAlign(RIGHT);
    text(table.getString(i, 0), 115, i * 50 + 70);
    //pull numbers
    barValues[i] = table.getString(i, 1);
    //draw graph
    stroke(90, 150, 120);
    rect(125, i * 50 + 55, int(barValues[i]), 20);
  }

  //Car Brand Label
  fill("black");
  stroke("0");
  for (var i = 0; i < numRows; i++) {
    push();
    let angle2 = radians(270);
    translate(20, 115);
    rotate(angle2);
    // Draw the letter to the screen
    text("Top German Car Brands", 0, 0);
    pop();
  }
}
