"use strict";
// #2 prompt user to enter an odd number between 1 and 50 and use break statement to continue prompting user if invalid input (even number or over 50/under 1)

while (true) {
    var userNum = prompt("Enter and odd number between 1 and 50")
    if (userNum % 2 !== 0 && userNum <= 50 && userNum >= 1) {
        break;
    }
}
console.log("Number to skip is: " + userNum);

// #3 Use a loop and continue statement to output all odd numbers, other than the number the user selected
for (var i = 1; i < 50; i = i + 2) {
    if (i == userNum) {
        console.log("Yikes!  Skipping number: " + userNum);
        continue;
    }
    console.log("Here is an odd number: " + i);
}
