// Rover Object Goes Here
// ======================
var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
}
// ======================

var grid  = [
   ["rover", null, null, null, null, null, null, null, null, null],
         [null, null, null, null, null, null, null, null, null, null],
         [null, null, null, null, null, null, null, null, null, null],
         [null, null, null, null, null, null, null, null, null, null],
         [null, null, null, null, null, null, null, null, null, null],
         [null, null, null, null, null, null, null, null, null, null],
         [null, null, null, null, null, null, null, null, null, null],
         [null, null, null, null, null, null, null, null, null, null],
         [null, null, null, null, null, null, null, null, null, null],
         [null, null, null, null, null, null, null, null, null, null]         
];

console.log("Execute the function 'commands()' either with one of the following arguments to move the rover:");
console.log("-'r': Turn right");
console.log("-'l': Turn left");
console.log("-'f': Move forward");
console.log("-'b': Move back");

    
function turnLeft(){

switch (rover.direction) {

    case "N":

    rover.direction = "W";

    break;

    case "E":

    rover.direction = "N";

    break;

    case "S":

    rover.direction = "E";

    break;

    case "W":

    rover.direction = "S";

    break;

  }
  
  console.log("turnLeft was called!. Rover is now facing " + rover.direction);
}


function turnRight(){
 
  switch (rover.direction) {

    case "N":

    rover.direction = "E";

    break;

    case "E":

    rover.direction = "S";

    break;

    case "S":

    rover.direction = "W";

    break;

    case "W":

    rover.direction = "N";

    break;

  }
  
  console.log("turnRight was called!. Rover is now facing " + rover.direction);

}


function moveForward() {
  
  if (rover.direction === "N") {
    
    rover.y -= 1;
    if (rover.y < 0) {
      rover.y += 1
    console.log("Rover can't be moved out of the grid!");} 
    console.log("Position (x, y): [" + rover.x, rover.y + "]");
    var log = rover.travelLog;
    log.push("[x: " + rover.x + ". y: " + rover.y + "]");
  }

  else if (rover.direction === "E") {

    rover.x += 1;
    if (rover.x > 9) {
      rover.x -= 1
    console.log("Rover can't be moved out of the grid!");}
    console.log("Position (x, y): [" + rover.x, rover.y + "]");
    var log = rover.travelLog;
    log.push("[x: " + rover.x + ". y: " + rover.y + "]");
  }
  
  else if (rover.direction === "S") {

    rover.y += 1;
    if (rover.y > 9) {
      rover.y -= 1
    console.log("Rover can't be moved out of the grid!");}
    console.log("Position (x, y): [" + rover.x, rover.y + "]");
    var log = rover.travelLog;
   log.push("[x: " + rover.x + ". y: " + rover.y + "]");
  }

  else if (rover.direction === "W") {

    rover.x -= 1;
    if (rover.x < 0) {
      rover.x += 1
    console.log("Rover can't be moved out of the grid!");}
    console.log("Position (x, y): [" + rover.x, rover.y + "]");
    var log = rover.travelLog;
   log.push("[x: " + rover.x + ". y: " + rover.y + "]");

  }
}


function moveBackward () {

  if (rover.direction === "N") {
    
    rover.y += 1;
    if (rover.y > 9) {
      rover.y -= 1
    console.log("Rover can't be moved out of the grid!");}
    console.log("Position (x, y): [" + rover.x, rover.y + "]");
    var log = rover.travelLog;
    log.push("[x: " + rover.x + ". y: " + rover.y + "]");
  }

  else if (rover.direction === "E") {

    rover.x -= 1;
    if (rover.x < 0) {
      rover.x += 1
    console.log("Rover can't be moved out of the grid!");}
    console.log("Position (x, y): [" + rover.x, rover.y + "]");
    var log = rover.travelLog;
    log.push("[x: " + rover.x + ". y: " + rover.y + "]");
  }
  
  else if (rover.direction === "S") {

    rover.y -= 1;
    if (rover.y < 0) {
      rover.y += 1
    console.log("Rover can't be moved out of the grid!");}
    console.log("Position (x, y): [" + rover.x, rover.y + "]");
    var log = rover.travelLog;
   log.push("[x: " + rover.x + ". y: " + rover.y + "]");
  }

  else if (rover.direction === "W") {

    rover.x += 1;
    if (rover.x > 9) {
      rover.x -= 1
    console.log("Rover can't be moved out of the grid!");}
    console.log("Position (x, y): [" + rover.x, rover.y + "]");
    var log = rover.travelLog;
   log.push("[x: " + rover.x + ". y: " + rover.y + "]");

  }
  
}
  

function commands(grid) {
  
  for (var i = 0; i < grid.length; i++) {

    switch(grid[i]) {

      case "l":

      turnLeft();

      break;

      case "r":

      turnRight();

      break;

      case "f":

      moveForward();

      break;

      case "b":

      moveBackward();

      break;

      default:
      
      console.log("You must enter either 'l', 'r', 'f' or 'b' to move the rover");

      break;
    }

   }

   console.log("Coordinates of the spaces the rover has traveled over so far: " + rover["travelLog"]);
}



