//The first two lines promts the user to enter their marks
const prompt = require("prompt-sync")({ sigint: true });
const grade = prompt("Enter you marks")

function getGrade (marks){// function declaration
if (marks > 100 || marks < 0 || isNaN(marks)){
    return `Invalid! Enter numbers between 0-100`
}//Alert the user that the marks entered are invalid if value entered is below 0 , above 100 or not a number
else  if (marks > 79){
    return `A`;
} 
else if (marks >= 60){
    return `B`;
}
else if ( marks >= 49){
    return `C`;
}
else if (marks >= 40){
    return `D`;
}
else if(marks < 40){
    return`E`
}

}
//Means to call the function
getGrade()
