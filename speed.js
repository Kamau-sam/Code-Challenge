//first two line promts the user to enter the speed
const prompt = require("prompt-sync")({ sigint: true });
const speedInput = prompt("Input speed");
const speed = Number(speedInput); // Convert the input string to a number

//Here is the function declaration
function speedDetector(speed) {
  if (speed <= 70) {
    console.log("OK"); //Here we print "OK" fo speed upto 70
  } else {
    let demeritPoints = Math.floor((speed - 70) / 5); //Here we calculate and allocate 1 demerit point for every 5km above 70
    // Here we print "License suspended" if demeritpoints exceed 12
    if (demeritPoints > 12) {
      console.log("License suspended");
    }
    //Here print a message + the demerit points if less than 12
    else {
      console.log("Points: " + demeritPoints);
    }
    if (isNaN(speed)) {
      console.log("Enter a valid Number");
    }
  }
}
//Means to call the function
speedDetector(speed);
