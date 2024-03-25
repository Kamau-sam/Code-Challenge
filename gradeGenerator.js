//The first two lines promts the user to enter their marks
const prompt = require("prompt-sync")({ sigint: true });
const marks = prompt("Enter you marks")

function getGrade (marks){// function declaration
  let grade;
if (marks > 100 || marks < 0 || isNaN(marks)){
  grade = `Invalid! Enter numbers between 0-100`
}//Alert the user that the marks entered are invalid if value entered is below 0 , above 100 or not a number
else  if (marks > 79){
  grade = `A`;
} 
else if (marks >= 60){
  grade = `B`;
}
else if ( marks >= 49){
  grade = `C`;
}
else if (marks >= 40){
  grade = `D`;
}
else if(marks < 40){
    grade = `E`
}
console.log ("Your grade is:" + grade)
}
//Means to call the function
getGrade(marks);